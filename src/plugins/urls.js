const baseUrl = () => {
    return process.env.REACT_APP_BASE_URL;
}

const secondaryUrl = () => {
    return {
        auth: 'auth-service/api/v1',
        terminal: 'terminal-service/api/v1',
        transactions: 'transaction-service/api/v1'
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
export const requestTerminal = `https://4fcc-41-58-227-137.ngrok.io/api/v1/terminals/request`;

export const allTerminals = `https://4fcc-41-58-227-137.ngrok.io/api/v1/terminals/viewallterminalbyuser`;

export const allterminalTypes = `https://4fcc-41-58-227-137.ngrok.io/api/v1/terminals/getterminaltypes`;

export const getunassignedterminals = `https://c55b-41-58-227-137.ngrok.io/api/v1/agent/getunassignedterminals`;


//Merchant Services
export const allMerchants = `https://c55b-41-58-227-137.ngrok.io/api/v1/agent/viewallmerchants`;

export const registerMerchant = `https://c55b-41-58-227-137.ngrok.io/api/v1/agent/registermerchant`;

export const mapTerminal = `https://c55b-41-58-227-137.ngrok.io/api/v1/agent/assignterminal`;


// export const allTerminals = `https://4fcc-41-58-227-137.ngrok.io/api/v1/terminals/viewallterminalbyuser`;

// export const allterminalTypes = `https://4fcc-41-58-227-137.ngrok.io/api/v1/terminals/getterminaltypes`;


//Transaction Services

export const allTransactions = `https://8ec8-41-58-227-137.ngrok.io/api/v1/transactions/viewalltransactionsbyuser`;

export const viewTransaction = `https://8ec8-41-58-227-137.ngrok.io/api/v1/transactions/viewonetransactionsbyuser`;