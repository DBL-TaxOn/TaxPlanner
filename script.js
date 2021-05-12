var printPageText = "";
var printPageTitle = "";
customElements.define('modal-page', class extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
  <ion-header>
    <ion-toolbar>
     <div class="titleTaxOn">${printPageTitle}</div>
      <ion-buttons slot="primary">
        <ion-button onClick="dismissModal()">
          <ion-icon slot="icon-only" name="close"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div style="padding:15px">${printPageText}</div>
  </ion-content>`;
  }
});

function dismissModal() {


  currentModal.forEach(element => {
    element.dismiss().then(() => {
      element=null;
    });

  });




}
let currentModal = [];

function presentModal() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  try {
    dismissModal();
  } catch (error) {

  }

  // create the modal with the `modal-page` component
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page';
  modalElement.mode = "ios";
  modalElement.swipeToClose = true;
  //modalElement.cssClass = 'my-custom-class';
  currentModal.push(modalElement);
  // present the modal
  document.body.appendChild(modalElement);
  return modalElement.present();
}
$(document).ready(function () {
  $("#1").click(function (e) {
    printPageTitle = "What is Tax Planning?";
    printPageText = `
    Tax planning means analysing your financial situation, from the point of view of tax efficiency. It helps a taxpayer employ tax exemptions, deductions and benefits to minimize tax liability and optimize finances.
    </br></br>
    Tax Planning is different from Tax Evasion. Tax Planning is legal, whereas Tax evasion is not. Tax planning aims at availing tax benefits through legitimate means on the lines of provisions and relaxations provided in tax laws.
    `;

    presentModal();

  });
  $("#2").click(function (e) {
    printPageTitle = "Why Tax Planning is important?";
    printPageText = `
    Suppose in FY 20-21, you earn a salary of ₹ 7 lakh a year and your income tax liability amounts to ₹ 44,200. That is a large amount! Now suppose you invest ₹ 1.5 lakh—i.e. 20% of your total income—in tax saving instruments. You can make your income tax liability to NIL—a 100% reduction. Imagine all you can do with the money saved!
    `;

    presentModal();

  });
  $("#3").click(function (e) {
    printPageTitle = "What are Steps involved in Tax Planning?";
    printPageText = `
    In simple terms, Tax Planning Process involves</br>
    </br>1. Estimating your Gross Total Income
    </br>2. Selecting suitable Tax Regime (From FY 20-21)
    </br>3. Deciding on Tax Saving Investments and availing Deductions to reduce your total taxable income
    </br>4. Filing of returns on time to avoid penalties
    `;

    presentModal();

  });
  $("#4").click(function (e) {
    printPageTitle = "How to estimate Gross Total Income?";
    printPageText = "We are here to help you. You can use <strong>Detailed Tax Calculator</strong> in our app to estimate your Gross Total Income and Tax liability.";
    presentModal();

  });
  $("#5").click(function (e) {
    printPageTitle = "How to save tax with section 80C? (Only appl. For Old Tax Regime)";
    printPageText = `
    Section 80C allows an individual/HUF to effectively invest in tax saving instruments, in order to optimally reduce their tax liability. This is seen as one of the most sought after sections when it comes to tax planning. In order to leave more money in the hands of the salaried class, hit by rising prices, the deduction limit under this Section is currently at ₹ 1.50 lakh p.a.
</br></br>The Section offers you host of popular investment instruments mentioned here under which
qualify you for a deduction from your Gross Total Income (GTI):
</br></br>• Life Insurance Premium
</br>• Public Provident Fund (PPF)
</br>• Employees’ Provident Fund (EPF)
</br>• Sukanya Samriddhi Yojana
</br>• National Saving Certificate (NSC) , including accrued interest
</br>• 5-Year fixed deposits with banks, Post Office, HUDCO and NHB
</br>• Senior Citizens Savings Scheme (SCSS)
</br>• National Pension System (NPS)
</br>• Unit-Linked Insurance Plans (ULIPs)
</br>• Equity Linked Savings Schemes (ELSS)
</br>• Pension Plans
</br>• Tuition fees paid for children’s education (max. 2 children) - SPENDING ACTIVITY
</br>• Stamp duty and registration cost of the House - SPENDING ACTIVITY 
</br>• Principal repayment on Housing Loan - SPENDING ACTIVITY 
</br></br>Hence, if you invest in any or all of the aforementioned instruments; you would qualify for
deduction under this section subject to the maximum of ₹ 1.50 lakh p.a. But we think rather than just merely investing in any of the above tax saving instruments, you can also use these tax saving instruments for investment planning and select one based on returns, risk appetite and other factors.
</br></br></br>   `;
    presentModal();

  });
  $("#6").click(function (e) {
    printPageTitle = "Thinking beyond section 80C (Only appl. For Old Tax Regime)";
    printPageText = `
    The following are all other major deductions that you can avail to save your taxes
</br></br><strong class="blueCC">80D: Medical Insurance Premium:</strong> </br></br>
It can be paid for self, dependent children and spouse. The deduction amount here is up to ₹ 25,000 from taxable income. An additional deduction up to ₹ 25,000 of medical insurance
premium paid for parents (father or mother, or for both) is allowed. The max. deduction limit is increased to ₹ 50,000 if age of insured is 60 years or more.

</br></br><strong class="blueCC">80U: Person with Disability:</strong> </br></br>
A resident individual who has been certified as a person with a disability by the medical authority can claim the tax benefit under Section 80U. A deduction of ₹ 75,000 is allowed for people with disabilities, and ₹ 1,25,000 deduction for people with severe disability.

</br></br><strong class="blueCC">80DD: Maintenance/Medical Treatment of Dependant Disabled:</strong> </br></br>
This section covers medical treatment expenditure, rehabilitation, and training of disabled dependent. This is for resident individual and HUF, provided dependent doesn't claim any deductions under section 80U from his taxable income. A fixed deduction of ₹ 75,000 can be claimed for disability within the range of 40% - 80%. In case of severe disability, deduction
of ₹ 1,25,000 can be claimed from taxable income.

</br></br><strong class="blueCC">80DDB: Deduction in respect of medical treatment:</strong> </br></br>
It includes the tax benefit for medical treatment of himself or dependent towards treatment of diseases listed under rule 11DD. The deductions can be of amount actually paid up to
₹ 40,000 and up to ₹ 100,000 in case of senior citizens.

</br></br><strong class="blueCC">80E: Interest on Education Loan:</strong> </br></br>
This section provides deduction from taxable income for interest payment on loan taken for higher studies for self/relative. Loan can be taken for study in India or Outside India also.The benefit is equivalent to the entire amount of interest paid for 8 years. So if you are planning to pursue higher studies, make the best use of this section with the education loan.

</br></br><strong class="blueCC">80EE: Interest on Housing Loan:</strong> </br></br>
This section is for individual taxpayers towards the interest repayment of a loan taken by them to buy a residential property. The maximum deduction from taxable income allowed is
₹ 50,000 subject to conditions of section 80EE like Loan must be sanction in FY 2016-17, Amount of Loan doesn’t exceed ₹ 35 lakhs, Value of House Property doesn’t exceed ₹ 50 Lakhs, Assessee should not own any Residential House on the Date of Sanction of Loan etc. This deduction is over & above deduction u/s 24(b) for interest paid in respect of loan borrowed for acquisition of a self-occupied property.

</br></br><strong class="blueCC">80EEA: Interest on Housing Loan:</strong> </br></br>
This section is for individual taxpayers towards the interest repayment of a loan taken by them to buy a residential property. The maximum deduction from taxable income allowed is
₹ 1,50,000 subject to conditions of section 80EE like Loan must be sanction in FY 2019-20, Not availed deduction u/s. 80EE, SDV of House Property doesn’t exceed ₹ 45 Lakhs, Assessee should not own any Residential House on the Date of Sanction of Loan etc. This deduction is over & above deduction u/s 24(b) for interest paid in respect of loan borrowed for acquisition of a self-occupied property.

</br></br><strong class="blueCC">80EEB: Interest on Electric Vehicle Loan:</strong> </br></br>
Deduction is available for Interest paid on Loan Taken For Purchase Of Electric Vehicle. The maximum deduction allowed is ₹ 1,50,000.The loan must be taken from bank/NBFC and it must be sanctioned 01.04.2019 to 31.03.2023.

</br></br><strong class="blueCC">80GG: Rent Paid but HRA not received:</strong> </br></br>
This section is for any self-employed individual or salaried person not in receipt of HRA/rent free accommodation. The deduction under this section is available to the minimum of: 
1.      Rent paid minus 10% of Total income (after reducing LTCG,STCG u/s.111A and adding back 80G Deduction)
2.      ₹ 5,000 per month (₹ 60,000 P.a)
3.      25% of Total income (after reducing LTCG, STCG u/s.111A and adding back 80G Deduction)
Deduction from taxable income under this section is subject to conditions of section 80GG and other provisions of the Income Tax Act 1961.

</br></br><strong class="blueCC">80G: Donations:</strong> </br></br>
Contributions made to certain relief funds and charitable institutions can be claimed as a deduction under Section 80G of the Income Tax Act. The various donations specified in section 80G are eligible for deduction up to either 100% or 50% with or without restriction as provided in section 80G.
Donations to PMNRF and CMNRF are 100% allowed without any restriction.

</br></br><strong class="blueCC">80TTA: Interest on Savings Deposits:</strong> </br></br>
This section allows deduction from taxable income of the interest earned from a savings account held with a bank/co-operative bank/post office. The deduction limit is of ₹ 10,000 on interest income and eligible for an individual and HUF. This deduction is not available for resident senior citizen.

</br></br><strong class="blueCC">80TTB: Interest on Deposits for senior citizens:</strong> </br></br>
Under Section 80TTB of Income Tax Act, senior citizens above the age of 60 are eligible to avail tax deductions up to ₹ 50,000, which are applicable on the interest income (From Savings Account/FD/RD etc.) earned during a particular financial year.
 
</br></br></br>   `;
    presentModal();

  });
  $("#7").click(function (e) {
    printPageTitle = "What are new Changes from FY 20-21? What is this Old regime or New regime of taxation? How does it affect our tax planning?";
    printPageText = `
    From FY 2020-21, you can choose to pay income tax under an optional new tax regime. The new tax regime is available for individuals and HUFs with lower tax rates and zero deductions/exemptions. You can see old tax rates and new tax rates in Tax Rates Section.
</br></br>

<table style="width:100%">
  <tr>
    <th class="blueCC" colspan="2">New Tax Regime (S.115BAC)</th>
    <th class="blueCC" colspan="2">Old Tax Regime</th>
  </tr>
  <tr>
    <td>Upto ₹ 2,50,000</td>
    <td>Nil</td>
    <td>Upto ₹ 2,50,000</td>
    <td>Nil</td>
  </tr>
  <tr>
    <td>₹ 2,50,001 to ₹ 5,00,000</td>
    <td>5%</td>
    <td>₹ 2,50,001 to ₹ 5,00,000</td>
    <td>5%</td>
  </tr>
  <tr>
    <td>₹ 5,00,001 to ₹ 7,50,000</td>
    <td>10%</td>
    <td>₹ 5,00,001 to ₹ 10,00,000</td>
    <td>20%</td>
  </tr>
<tr>
    <td>₹ 7,50,001 to ₹ 10,00,000</td>
    <td>15%</td>
    <td>Above ₹ 10,00,000</td>
    <td>30%</td>
</tr>

<tr>
    <td>₹ 10,00,001 to ₹ 12,50,000</td>
    <td>20%</td>
    <td>(Basic Exemption Limit is 3 lakhs for Senior Citizens i.e., 60+)</td>
    <td></td>
</tr>

<tr>
    <td>₹ 12,50,001 to ₹ 15,00,000</td>
    <td>25%</td>
    <td>(Basic Exemption Limit is 5 lakhs for Super Senior Citizens i.e., 80+)</td>
    <td></td>
</tr>

<tr>
    <td>Above ₹ 15,00,000</td>
    <td>30%</td>
    <td></td>
    <td></td>
</tr>
</table>


</br></br>

The following are the deductions and exemptions you cannot claim under the new tax system:
</br></br>1.The standard deduction, professional tax and entertainment allowance on salaries
2.Leave Travel Allowance (LTA)
3.House Rent Allowance (HRA)
4.Minor child income allowance
5.Helper allowance
6.Children education allowance
7.Other special allowances [Section10(14)]
8.Interest on housing loan on the self-occupied property or vacant property (Section 24)
9.Chapter VI-A deduction (80C,80D, 80E and so on) (Except Section 80CCD(2) and 80JJAA)
10.Without exemption or deduction for any other perquisites or allowances
11.Deduction from family pension income
</br></br>
<strong class="blueCC">But, You can still claim tax exemption for:</strong></br></br>
1.80CCD(2), 80JJA
2.Interest on housing loan on Let-out property (However, restricts the deduction to the taxable rent received from the property as loss cannot be setoff with other heads or cannot be c/f)
3.Transport allowances in case of a specially-abled person.
4.Conveyance allowance received to meet the conveyance expenditure incurred as part of the employment.
5.Any compensation received to meet the cost of travel on tour or transfer.
6.Daily allowance received to meet the ordinary regular charges or expenditure you incur on account of absence from his regular place of duty.

</br></br><strong class="blueCC">Other Conditions to opt for New Tax Regime:</strong></br></br>
•Individual have option to select Old or New Tax Regime.
•No setoff of carry forward losses/depreciation of previous years, if they are attributable to above ineligible deductions
•No setoff of loss under head “Income from House Property” with any other head
•Option to be exercised on or before the due date of filing return of income for AY 2021-22
•In case a taxpayer has a business income and exercised the option, he/she can withdraw from the option only once. A business taxpayer withdrawing from the optional tax regime has to follow the regular income tax slabs.
•Salaried individuals (who are non-business income earners) will be eligible to opt for the new regime on a 'year on year' basis.
</br></br>
<strong class="blueCC">How does it affect Tax Planning?</strong></br></br>
From a tax planning perspective, it is essential to choose the tax regime at the beginning of the financial year. A taxpayer must make a comparison of the income tax under the new tax regime with the existing regime. Once the taxpayer chooses the tax regime at the beginning of the year, the investments and TDS or advance tax payable calculations are made accordingly. You can compare and choose suitable tax regime using our <strong>Detailed Tax Calculator</strong> or <strong>Quick Tax Calculator.</strong>
</br></br></br>  `;
    presentModal();

  });
  $("#8").click(function (e) {
    printPageTitle = "How to save tax on your salary? (Only appl. For Old Tax Regime)";
    printPageText = `
    It is important that one looks at the various components of salary in order to avail tax benefits on the same. The vital component of salary, where restructuring may be required is as under:
</br></br>
    <strong class="blueCC">Basic Salary:</strong> </br></br>
This is a fixed component in your pay check and forms the basis of other portions of your salary, hence the name. For instance, HRA is defined as a percentage (as per the company’s discretion) of this basic salary. Your PF is deducted at 12% of your basic salary. It is usually a large portion of your total salary.
</br></br>
<strong class="blueCC">House Rent Allowance (HRA):</strong></br></br>
If you are paying rent for an accommodation, and if your organisation extends you HRA benefits, then this is another vital component that can help you to reduce your tax liability.
</br></br>You can calculate your HRA Exemption here in our app. </br></br>
<u>Conditions to avail HRA Exemption:</u>
1.      This deduction is allowed only when an employee actually pays rent for his/her residence purpose. If no rent is paid for any period then no deduction is allowed for that period. Rent receipts may be asked as proof by the income tax officer. No documents are required to be attached at time of filing ITR.
2.      No deduction is allowed if employee is living in his/her own house.
3.      Even if rent is paid to any family members, HRA is allowed. There is no legal requirement but it is advisable to pay such rent on monthly basis and through bank transfer.
4.      There is no requirement that employee should not own a house property. If the employee resides in a rented property, he can claim exemption even if he owns a house property in the same or different city.
5.      Deduction of house rent allowance, home loan interest under section 24b, repayment of housing loan under section 80C can be claimed simultaneously.
6.      No deduction is allowed under this section if employee does not receive any house rent allowance from employer. However deduction for rent paid can be claimed under section 80GG.
Here a noteworthy point is, if your rent is very high and if you are not fully covered by the HRA limit, then it would be wise to pick a company leased accommodation (if the company in which you work in offers so), as this company leased accommodation would constitute to be the perk value and would be taxed @ 15% of your gross income. Sure, the perk value is taxable but it still works out to be more effective for tax planning, than opting for a HRA that doesn’t fully cover your rent.
</br></br>
<strong class="blueCC">Leave Travel Concession (LTC):</strong></br></br>
Salaried employees can avail exemption for a trip within India under LTA. The exemption is only for the shortest distance on a trip. This allowance can only be claimed for a trip taken with your spouse, children, and parents, but not with other relatives. This particular exemption is up to the actual expenses, therefore unless you actually take the trip and incur these expenses, you cannot claim it. Submit the bills to your employer to claim this exemption. You can avail this benefit in respect of two journeys performed in a block of four calendar years. The ongoing block is the calendar year 2018-2021.
</br></br>
<strong class="blueCC">Education and Hostel allowance:</strong></br></br>
If you are married with kids, and if your employer is providing with education allowance, then do not refrain from availing it, as this can again help you in reduction of your tax liability. The exemption extended to you under the Income Tax Act is ₹ 100 per month for a maximum of two children (i.e. in other words Rs 2,400 p.a. totally). Similarly, if your children are staying in a hostel then a maximum of ₹ 300 per month per child but subject to a maximum of two children will be available to you as an exemption (i.e. ₹ 7,200 per annum)
</br></br>
<strong class="blueCC">Meal Allowance through Food Coupons / Food Cards:</strong></br></br>
Food allowance can be given by the employer through the provision of food at working hours or through pre-paid food vouchers/coupons. For instance, vouchers (not transferable) are tax-exempt to the extent of ₹ 50 per meal. On a calculation of 22 working days a month and 2 meals per day, a sum of ₹ 26,400 can be availed as a deduction by an employee annually.
</br></br>
<strong class="blueCC">Professional Tax:</strong></br></br>
Professional tax or tax on employment is a tax levied by a state, just like income tax which is levied by the central government. The maximum amount of professional tax that can be levied by a state is ₹ 2,500. It is usually deducted by the employer and deposited with the state government. In your income tax return, professional tax is allowed as a deduction from your salary income
</br></br>
<strong class="blueCC">Standard Deduction:</strong></br></br>
The employee can now claim a flat₹ 50,000 (Prior to Budget 2019, it was Rs. 40,000) deduction from the total income, thereby reducing the tax outgo.
</br></br></br> `;
    presentModal();

  });
  $("#9").click(function (e) {
    printPageTitle = "How your home loan can help in tax planning?";
    printPageText = `
    Buying your own house is a dream come true for everyone. The Indian government has always shown a great inclination to encourage citizens to invest in a house. This is why a home loan is eligible for tax deduction under section 80C. And when you buy a house on a home loan, it comes with multiple tax benefits too that significantly reduce your tax outgo. 
    </br></br>• Principal Repayment = Eligible for Deduction under S.80C
  </br>• Stamp Duty Charges = Eligible for Deduction under S.80C
  </br>• Payment of Interest = Eligible for Deduction under S.24b and Additional deduction under S.80EE/80EEA
  </br></br>The above benefits are available irrespective whether you stay in the same property (Self Occupied Property - SOP), or have let it out on rent (Let Out Property - LOP). 
  </br> </br>• Section 80C has maximum deduction limit of ₹ 1,50,000
</br>• Section 24(b) has maximum deduction limit of ₹ 2,00,000 for construction/purchase ; ₹ 30,000 for renovation/repairs of Self occupied property and no limit for Let out property. Pre-construction Period interest is allowed as a deduction in 5 equal instalments starting from the year in which the property is acquired or construction is completed
</br>• Section 80EE has maximum deduction limit of ₹ 50,000 but deduction is available only for loans sanctioned in FY 2016-17 sub. to fulfilling of other conditions
</br>• Section 80EEA has maximum deduction limit of ₹ 1,50,000 but deduction is available only for loans sanctioned in FY 2019-20 sub. to fulfilling of other conditions

</br></br><strong class="blueCC">Deduction for Joint Home Loan:</strong></br></br>
If the loan is taken jointly, then each of the loan holders can claim a deduction for home loan interest up to ₹ 2 lakhs each and principal repayment u/s 80C up to ₹ 1.5 lakhs each in their individual tax returns. To claim this deduction, they should also be co-owners of the property taken on loan. So, remember if you plan to buy a house, it makes sense to include your spouse as a co-owner; especially if your spouse’s income is taxable. This will result in higher tax saving in addition to boosting your loan eligibility.
Note: S.80C/80EE/80EEA deductions are not available if you opt for New Tax Regime. In case of Self Occupied Property, even S.24b deduction is not available if you opt for New Tax Regime.
</br></br></br>   `;
    presentModal();

  });
  $("#10").click(function (e) {
    printPageTitle = "How to save on Capital Gains tax when you are selling any long-term asset like house etc.?";
    printPageText = `
    Under Section 54/54F the Income Tax Act, an individual or HUF selling a Long-term Capital Asset/Residential property can avail tax exemptions from Capital Gains if the capital gains are invested in purchase or construction of residential property. 
    </br></br>
    <strong class="blueCC">Investing in residential property</strong></br></br>
One can purchase new residential house property to save taxes on long-term capital gains. These exemptions are linked under Section 54 and Section 54F. Under Section 54, an individual or HUF will be exempted from paying long-term capital gains tax if they sell a built-up residential house and use the capital gain to purchase or construct a new residential property. The new property has to be purchased either 1 year before or 2 years after the sale of the existing property. If the seller wishes to construct a new property, it must be completed within 3 years after selling the house. Moreover, the entire capital gain has to be invested to buy the new property if the seller seeks exemption from tax. Otherwise, any excess amount not utilised to purchase the property will be chargeable for long-term capital gain tax in India. The amount should also be utilised to purchase or construct only 2 residential houses in India (if Capital gains is less than or equal to 2 crores). Otherwise, only to 1 residential house in India.
Under Section 54F, when an individual or a Hindu Undivided Family sells any capital asset other than residential property and utilises the capital gain to purchase or build only One residential house, then the total value will be exempted from taxes. In this case, the total net sale consideration has to be invested instead of only the capital gain. In case the total net sale consideration is not invested, the amount will be taxable according to proportionate basis under the Income Tax Act of India. Rest of the conditions will be similar to Section 54.
</br></br>
<strong class="blueCC">Investing in bonds</strong></br></br>
One can also follow Section 54EC to save on long-term capital gains tax by transferring the total amount to acquire bonds issued by NHAI and RECL. The list of these bonds are available on the official website of Income Tax Department of India. The investment must be made within 6 months from date of transfer.
</br></br>
<strong class="blueCC">Capital Gain Account scheme (CGAS)</strong></br></br>
Capital gain account scheme allows an investor to enjoy tax exemptions without purchasing a residential property. If such Investment is not made before Duedate of filing of ROI, then Capital Gain/Net sale consideration (for 54F) has to be deposited under the CGAS to get exemption. The Government of India allows withdrawal of funds from this account only to purchase houses and plots (only for specified purposes).Otherwise, the total profit amount will be charged in accordance with the long-term capital gain tax rates as applicable.
</br></br></br>   `;
    presentModal();

  });
  $("#11").click(function (e) {
    printPageTitle = "What if you file your IT returns after due date? What are penalties for non-filing of returns/non-payment of taxes?";
    printPageText = `
    A late filing fee will be applicable for filing your returns after the due date under section 234F. The maximum penalty is ₹ 10,000. If you file your ITR after the due date but before 31 December of 2021 (For AY 2021-22), a penalty of ₹ 5000 will be levied. For returns filed later than 31 December 2019, the penalty levied will be increased to Rs.10,000. There is a relief given to small taxpayers – the IT department has stated that if the total income does not exceed ₹ 5 lakh, the maximum penalty levied for delay will be ₹ 1000.  
</br></br>Now a days, Government is searching for new ways to discourage non-compliance by Tax Payers. Recently, Govt. stated that the benefits of new regime will be applicable only if you file returns before due date. So, To opt for new regime you must file your returns on time.
</br></br>For Non-Payment of Taxes, Section 234A, 234B, 234C are levied. You can also calculate your Interest and Penalty in our app.
</br></br></br> `;
    presentModal();

  });

});
