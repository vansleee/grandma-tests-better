*** Settings ***
Library    BuiltIn

*** Test Cases ***
Calculate Shipping Fee
    [Template]    Verify Shipping Fee
    VIP           1999    100
    VIP           2000    100
    VIP           2001    0
    Normal        500     100
    Normal        2000    100
    Normal        5000    100

*** Keywords ***
Verify Shipping Fee
    [Arguments]    ${memberType}    ${amount}    ${expectedCharge}
    ${actualCharge}=    Calculate Shipping Fee    ${memberType}    ${amount}
    Should Be Equal As Integers    ${actualCharge}    ${expectedCharge}

Calculate Shipping Fee
    [Arguments]    ${memberType}    ${amount}
    Run Keyword If    '${memberType}' == 'VIP' and ${amount} > 2000
    ...    Return From Keyword    0
    Return From Keyword    100