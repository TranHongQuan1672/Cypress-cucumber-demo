const noti = '.ant-message-custom-content'

class ResultPage{
    static expect(popup){
        return{
            tobeSuccessful:()=>{
                cy.get(noti, {timeout : 1000}).should('have.text',popup)
            },
            tobeUnsuccessful: ()=>{
                cy.get(noti, {timeout : 1000} ).should('not.have.text',popup)
            }
        }
    }
}
export default ResultPage