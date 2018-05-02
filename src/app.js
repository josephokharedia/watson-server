import AssistantV1 from 'watson-developer-cloud/assistant/v1';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const credentials = {
    "url": "https://gateway.watsonplatform.net/assistant/api",
    "username": "484d52fb-28ed-4b70-8cff-b3e09b82a4eb",
    "password": "jheFgO2TNxZj",
    "version": "2018-02-16"
}
const workSpaceId = '624704c7-68d2-478d-b197-3170d8278b5f';
let watsonAssistant = new AssistantV1({ ...credentials
});
// console.log(watsonAssistant);


export const sendMessage = (msg='', callback) => {
    watsonAssistant.message({
        workspace_id: workSpaceId,
        input: {
            'text': msg
        }
    },callback);
};

// watsonAssistant.listWorkspaces((err, response) => {
//     if (err) {
//         console.log('err:', err);
//     }
//     console.log('response:', response);
// });