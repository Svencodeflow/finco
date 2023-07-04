export const passwortResetTemplate = ({ userName, resetLink }) => `
Hi ${userName || ""},
Please click <a href="${resetLink || process.env.CLIENT_URL}">here</a> to reset 
your Password.
If you did not try to reset your password, please ignore this email.
`;
