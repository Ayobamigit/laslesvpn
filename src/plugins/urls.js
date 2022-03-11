const baseUrl = () => {
    return {
        auth: process.env.REACT_APP_BASE_URL_AUTH,
        terminal: process.env.REACT_APP_BASE_URL_TERMINAL,
        transactions: process.env.REACT_APP_BASE_URL_TRANSACTION,
        merchant: process.env.REACT_APP_BASE_URL_MERCHANT,
        audit: process.env.REACT_APP_BASE_URL_AUDIT,
        dispute: process.env.REACT_APP_BASE_URL_DISPUTE,
    };
}

// const secondaryUrl = () => {
//     return {
//         auth: 'auth-service/api/v1',
//         terminal: 'terminal-service/api/v1',
//         transactions: 'transaction-service/api/v1',
//         merchant: 'merchant-service/api/v1',
//         audit: 'merchant-service/api/v1',
//         dispute: 'dispute-service/api/v1'
//     }
// }

//Auth service

//Sign in
export const signIn = `${baseUrl().auth}/auth/login`;

//Sign up
export const signUp = `${baseUrl().auth}/auth/create-corporate`;

//Verify OTP
export const verify = `${baseUrl().auth}/auth/verify-otp`;


//Resend OTP
export const resend = `${baseUrl().auth}/auth/resend-otp/signup/`;



//business types 
export const businessTypesList = `${baseUrl().auth}/business/type/find/all`;


//Terminal Services
export const requestTerminal = `${baseUrl().terminal}/terminals/request`;

export const allTerminals = `${baseUrl().terminal}/terminals/viewallterminalbyuser`;

export const allterminalTypes = `${baseUrl().terminal}/terminals/getterminaltypes`;



//Merchant Services
export const allMerchants = `${baseUrl().merchant}/agent/viewallmerchants`;

export const getunassignedterminals = `${baseUrl().merchant}/agent/getunassignedterminals`;

export const registerMerchant = `${baseUrl().merchant}/agent/registermerchant`;

export const updateMerchant = `${baseUrl().merchant}/agent/updatemerchant`;

export const mapTerminal = `${baseUrl().merchant}/agent/assignterminal`;

export const unMapTerminal = `${baseUrl().merchant}/agent/unassignterminal`;

export const viewMerchant = `${baseUrl().merchant}/agent/viewmerchantbyid`;

export const viewMerchantTerminals = `${baseUrl().merchant}/agent/getmerchantterminals`;

export const activateMerchant = `${baseUrl().merchant}/agent/activatemerchant`;

export const deactivateMerchant = `${baseUrl().merchant}/agent/deactivatemerchant`;


//Transaction Services

export const allTransactions = `${baseUrl().transactions}/transactions/viewalltransactionsbyuser`;

export const viewTransaction = `${baseUrl().transactions}/transactions/viewonetransactionsbyuser`;

//Activity Logs
export const viewActivity = `${baseUrl().audit}/auditlogs/viewalliserlogs`;

//Dispute service
export const allWayaDisputes = `${baseUrl().dispute}/wayaposDisputes/viewAllDisputes`;

export const allAuthDisputes = `${baseUrl().dispute}/auth-notification-dispute/viewAllDisputes`;

export const allOtherDisputes = `${baseUrl().dispute}/othersDispute/viewAllDisputes`;


