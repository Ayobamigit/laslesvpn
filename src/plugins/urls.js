const baseUrl = () => {
    return process.env.REACT_APP_BASE_URL;
}

const secondaryUrl = () => {
    return {
        auth: 'auth-service/api/v1',
        terminal: 'terminal-service/api/v1',
        transactions: 'transaction-service/api/v1',
        merchant: 'merchant-service/api/v1'
    }
}

//Auth service

//Sign in
export const signIn = `${baseUrl()}/${secondaryUrl().auth}/auth/login`;

//Sign up
export const signUp = `${baseUrl()}/${secondaryUrl().auth}/auth/create-corporate`;

//Verify OTP
export const verify = `${baseUrl()}/${secondaryUrl().auth}/auth/verify-otp`;


//Resend OTP
export const resend = `${baseUrl()}/${secondaryUrl().auth}/auth/resend-otp/signup/`;



//business types 
export const businessTypesList = `${baseUrl()}/${secondaryUrl().auth}/business/type/find/all`;


//Terminal Services
export const requestTerminal = `${baseUrl()}/${secondaryUrl().terminal}/terminals/request`;

export const allTerminals = `${baseUrl()}/${secondaryUrl().terminal}/terminals/viewallterminalbyuser`;

export const allterminalTypes = `${baseUrl()}/${secondaryUrl().terminal}/terminals/getterminaltypes`;



//Merchant Services
export const allMerchants = `https://60ed-41-58-227-137.ngrok.io/api/v1/agent/viewallmerchants`;

export const getunassignedterminals = `https://60ed-41-58-227-137.ngrok.io/api/v1/agent/getunassignedterminals`;

export const registerMerchant = `https://60ed-41-58-227-137.ngrok.io/api/v1/agent/registermerchant`;

export const updateMerchant = `https://60ed-41-58-227-137.ngrok.io/api/v1/agent/updatemerchant`;

export const mapTerminal = `https://60ed-41-58-227-137.ngrok.io/api/v1/agent/assignterminal`;

export const unMapTerminal = `https://60ed-41-58-227-137.ngrok.io/api/v1/agent/unassignterminal`;

export const viewMerchant = `https://60ed-41-58-227-137.ngrok.io/api/v1/agent/viewmerchantbyid`;

export const viewMerchantTerminals = `https://60ed-41-58-227-137.ngrok.io/api/v1/agent/getmerchantterminals`;


//Transaction Services

export const allTransactions = `https://8ec8-41-58-227-137.ngrok.io/api/v1/transactions/viewalltransactionsbyuser`;

export const viewTransaction = `https://8ec8-41-58-227-137.ngrok.io/api/v1/transactions/viewonetransactionsbyuser`;