import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromEnvironmentVariables from './store/environment-variables.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EnvironmentVariablesEffects } from './store/environment-variables.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromEnvironmentVariables.environmentVariablesFeatureKey, fromEnvironmentVariables.reducer),
    EffectsModule.forFeature([
      EnvironmentVariablesEffects,
    ]),
  ],
})
export class EnvironmentVariablesModule { }
