const CLERK_PUBLISHABLE_KEY = "pk_test_cG9zaXRpdmUtdHVya2V5LTIxLmNsZXJrLmFjY291bnRzLmRldiQ";
const crypto = require('crypto');

const secret = 'oxw8czetcmh791yhtz6404nggs28qlxp'; 
const userId = current_user.id 

const hash = crypto.createHmac('sha256', secret).update(userId).digest('hex');