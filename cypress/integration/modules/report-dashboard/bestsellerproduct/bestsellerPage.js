class bestSellerPage {
    static liReport(){
        cy.get('li.has-treeview:nth-child(9)').click()
        cy.get('p').contains('Bestsellers').click()
    }
    static scrapTable(){
        cy.get('table#salesreport-grid>tbody>tr')
        .each(function($row, index, $rows){
            cy.wrap($row).within(function(){
                cy.get('td')
                .each(function($cellData, index, $columns){
                    cy.log($cellData.text())
                })
            })
        })
    }
}

export default bestSellerPage