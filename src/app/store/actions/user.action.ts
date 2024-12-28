import { createAction, props } from "@ngrx/store";
import { UserI } from "src/app/interfaces/user";

export const loginAction = createAction('loginAction', props<{ user: UserI }>())

export const logoutAction = createAction('logoutAction')

