import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormControlEvent, DynamicFormService } from '@ng-dynamic-forms/core';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { patchFormModel, fromFormModel } from 'src/app/helpers/dynamic-forms';
import { nonNull } from 'src/app/helpers/nonNull';
import { CompanyMember } from 'src/app/models/registration.model';
import { registerByInvitation, setRegistrationByInvitation } from '../../store/registration.actions';
import {
  selectRegistrationByInvitation,
  selectRegistrationByInvitationError,
} from '../../store/registration.selectors';
import { ACCOUNT_INFORMATION_LAYOUT, PERSONAL_INFORMATION_LAYOUT } from './registration-by-invitation.layout';
import {
  ACCOUNT_INFORMATION_INPUTS,
  ACCOUNT_INFORMATION_MODEL,
  PERSONAL_INFORMATION_INPUTS,
  PERSONAL_INFORMATION_MODEL,
} from './registration-by-invitation.model';

@Component({
  selector: 'vc-registration-by-invitation',
  templateUrl: './registration-by-invitation.component.html',
  styleUrls: [
    './registration-by-invitation.component.scss',
  ],
})
export class RegistrationByInvitationComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(DynamicNGBootstrapFormComponent)
  formComponents!: QueryList<DynamicNGBootstrapFormComponent>;

  personalInformationFormInputs = PERSONAL_INFORMATION_INPUTS;

  accountInformationFormInputs = ACCOUNT_INFORMATION_INPUTS;

  personalInformationFormModel = PERSONAL_INFORMATION_MODEL;

  accountInformationFormModel = ACCOUNT_INFORMATION_MODEL;

  accountInformationFormLayout = ACCOUNT_INFORMATION_LAYOUT;

  personalInformationFormLayout = PERSONAL_INFORMATION_LAYOUT;

  personalInformationFormGroup =
    this.formService.createFormGroup(this.personalInformationFormModel, { updateOn: 'blur' });

  accountInformationFormGroup =
    this.formService.createFormGroup(this.accountInformationFormModel, { updateOn: 'blur' });

  isValid = false;

  error$ = this.store.select(selectRegistrationByInvitationError);

  unsubscriber = new Subject();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly formService: DynamicFormService,
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(
        map(queryParamMap => queryParamMap.get('email')),
        filter(nonNull),
        takeUntil(this.unsubscriber)
      )
      .subscribe(email => {
        this.store.dispatch(setRegistrationByInvitation({
          data: {
            email,
          },
        }));
      });
  }

  ngAfterViewInit(): void {
    this.store.select(selectRegistrationByInvitation)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(registrationByInvitation => {
        patchFormModel(this.personalInformationFormInputs, registrationByInvitation);
        patchFormModel(this.accountInformationFormInputs, registrationByInvitation);
        this.detectFormChanges();
      });
  }

  detectFormChanges(): void {
    this.formComponents.forEach(formComponent => {
      this.formService.detectChanges(formComponent);
    });
  }

  onChange(event: DynamicFormControlEvent): void {
    const member = fromFormModel<CompanyMember>(event.model);
    if (member != null) {
      this.store.dispatch(setRegistrationByInvitation({
        data: member,
      }));
    }
    this.isValid = this.personalInformationFormGroup.valid && this.accountInformationFormGroup.valid;
  }

  submit(): void {
    const queryParamMap = this.activatedRoute.snapshot.queryParamMap;
    this.store.dispatch(registerByInvitation({
      userId: queryParamMap.get('userId') as string,
      token: queryParamMap.get('token') as string,
    }));
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
