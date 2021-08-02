/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface InputAddItemsType {
  readonly cartId?: string | null;
  readonly storeId: string;
  readonly cartName?: string | null;
  readonly userId: string;
  readonly currencyCode?: string | null;
  readonly cultureName?: string | null;
  readonly cartType?: string | null;
  readonly cartItems: ReadonlyArray<(InputNewCartItemType | null)>;
}

export interface InputApplicationUserLoginType {
  readonly loginProvider: string;
  readonly providerKey: string;
}

export interface InputAssignPermissionScopeType {
  readonly scope: string;
  readonly type: string;
}

export interface InputAssignPermissionType {
  readonly assignedScopes?: ReadonlyArray<(InputAssignPermissionScopeType | null)> | null;
  readonly name: string;
}

export interface InputAssignRoleType {
  readonly concurrencyStamp?: string | null;
  readonly id: string;
  readonly name: string;
  readonly permissions: ReadonlyArray<(InputAssignPermissionType | null)>;
}

export interface InputChangeCommentType {
  readonly cartId?: string | null;
  readonly storeId: string;
  readonly cartName?: string | null;
  readonly userId: string;
  readonly currencyCode?: string | null;
  readonly cultureName?: string | null;
  readonly cartType?: string | null;
  readonly comment?: string | null;
}

export interface InputClearCartType {
  readonly cartId?: string | null;
  readonly storeId: string;
  readonly cartName?: string | null;
  readonly userId: string;
  readonly currencyCode?: string | null;
  readonly cultureName?: string | null;
  readonly cartType?: string | null;
}

export interface InputCreateContactType {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly memberType?: string | null;
  readonly addresses?: ReadonlyArray<(InputMemberAddressType | null)> | null;
  readonly phones?: ReadonlyArray<(string | null)> | null;
  readonly emails?: ReadonlyArray<(string | null)> | null;
  readonly groups?: ReadonlyArray<(string | null)> | null;
  readonly fullName?: string | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly middleName?: string | null;
  readonly salutation?: string | null;
  readonly photoUrl?: string | null;
  readonly timeZone?: string | null;
  readonly defaultLanguage?: string | null;
  readonly organizations?: ReadonlyArray<(string | null)> | null;
}

export interface InputCreateOrganizationType {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly memberType?: string | null;
  readonly addresses?: ReadonlyArray<(InputMemberAddressType | null)> | null;
  readonly phones?: ReadonlyArray<(string | null)> | null;
  readonly emails?: ReadonlyArray<(string | null)> | null;
  readonly groups?: ReadonlyArray<(string | null)> | null;
}

export interface InputCreateUserType {
  readonly createdBy?: string | null;
  readonly createdDate?: any | null;
  readonly email: string;
  readonly id?: string | null;
  readonly isAdministrator?: boolean | null;
  readonly lockoutEnabled?: boolean | null;
  readonly lockoutEnd?: any | null;
  readonly logins?: ReadonlyArray<(InputApplicationUserLoginType | null)> | null;
  readonly memberId?: string | null;
  readonly password?: string | null;
  readonly phoneNumber?: string | null;
  readonly phoneNumberConfirmed?: boolean | null;
  readonly photoUrl?: string | null;
  readonly roles?: ReadonlyArray<(InputAssignRoleType | null)> | null;
  readonly storeId?: string | null;
  readonly twoFactorEnabled?: boolean | null;
  readonly userName: string;
  readonly userType: string;
}

export interface InputDynamicPropertyValueType {
  readonly name: string;
  readonly value?: string | null;
  readonly locale?: string | null;
}

export interface InputMemberAddressType {
  readonly city: string;
  readonly countryCode: string;
  readonly countryName: string;
  readonly email?: string | null;
  readonly firstName?: string | null;
  readonly id?: string | null;
  readonly key?: string | null;
  readonly lastName?: string | null;
  readonly line1: string;
  readonly line2?: string | null;
  readonly middleName?: string | null;
  readonly name?: string | null;
  readonly organization?: string | null;
  readonly phone?: string | null;
  readonly postalCode: string;
  readonly regionId?: string | null;
  readonly regionName?: string | null;
  readonly zip?: string | null;
  readonly addressType?: number | null;
}

export interface InputNewCartItemType {
  readonly productId: string;
  readonly quantity?: number | null;
}

export interface InputUpdateCartItemDynamicPropertiesType {
  readonly cartId?: string | null;
  readonly storeId: string;
  readonly cartName?: string | null;
  readonly userId: string;
  readonly currencyCode?: string | null;
  readonly cultureName?: string | null;
  readonly cartType?: string | null;
  readonly lineItemId: string;
  readonly dynamicProperties: ReadonlyArray<(InputDynamicPropertyValueType | null)>;
}

export interface InputUpdateMemberDynamicPropertiesType {
  readonly memberId: string;
  readonly dynamicProperties: ReadonlyArray<(InputDynamicPropertyValueType | null)>;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
