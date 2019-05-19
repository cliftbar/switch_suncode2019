import { type } from "./util";

export const ActionTypes = {
    LOAD_USER_DATA: type("[LOAD_USER_DATA-DATA] Load User Data"),
    ADD_USER_DATA: type("[ADD_USER_DATA] Add User Data"),
    PAY_BILL: type("[PAY_BILL] Pay Bill"),
    ADD_CARD: type("[ADD_CARD] Add Card"),
    ADD_BANK_INFO: type("[ADD_BANK_INFO] Add Bank Info"),
    SET_AUTOPAY: type("[SET_AUTOPAY] Set Auto Pay"),
    REST_PASSWORD: type("[REST_PASSWORD] Reset Password"),
    CREATE_ACCOUNT: type("[CREATE_ACCOUNT] Create Account"),
    FIND_ACCOUNT: type("[FIND_ACCOUNT] Find Account"),
    SEND_EMAIL_RECEIPT: type("[SEND_EMAIL_RECEIPT] Send Email Receipt")
    }
