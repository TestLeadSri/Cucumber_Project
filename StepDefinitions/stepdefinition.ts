import {Given,When,Then, DataTable, setDefaultTimeout, After, Before} from "@cucumber/cucumber";
import { Browser, Dialog, firefox, Page } from "playwright";
setDefaultTimeout(15000);

//global Variables
 let browser: Browser;
 let page:Page;

Given('open the firefox browser', async()=> {

    // Launch Firefox browser
     browser= await firefox.launch({headless:false})

    // Open a new browser page
    page = await browser.newPage();
  
});



Given('Navigate to the url', async()=> {
   await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
});


//ScenarioOutline Examples
When('Enter the Username feild {string}', async (Username:string) => {
 await page.locator("[name='txtUserName']").fill(Username);

  
});

When('Enter the Password {string}', async (Password:string) => {
  await page.locator("[name='txtPassword']").fill(Password);
});

//BUT- NEGATIVE CASES

/*When('Enter the Username {string}', async (Username:string) => {
 await page.locator("[name='txtUserName']").fill(Username);

  
});

When('Enter the Password {string}', async (Password:string) => {
  await page.locator("[name='txtPassword']").fill(Password);
});



Then('Should remain on the login page', async () =>{

    const currentURL = await page.url();

  if (!currentURL.includes('login')) {
  throw new Error(`Test Failed: Expected to remain on login page, but got ${currentURL}`);
} else {
  console.log("Test Passed: Remained on Login Page");
}

});*/


//BACKGROUND  and AND
/*When('Enter the Username {string}', async (Username:string) => {
 await page.locator("[name='txtUserName']").fill(Username);

  
});


When('Enter the Password {string}', async (Password:string) => {
  await page.locator("[name='txtPassword']").fill(Password);
});

Then('Verify Invalid Login', async () => {
  let errorMessage :string|null = await  page.locator("xpath=//font[text()='Invalid Login']").textContent();

  console.log("errorMessage :" + errorMessage);

  if(errorMessage =="Invalid Login")
  {
    console.log("error message displayed sucessfully -- TestPassed");
    
  }
else{
  throw new Error("Invalid Login verification failed");
}
});*/



/*When('Enter the Password {string}',  async (Password:string)=> {
  await page.locator("[name='txtPassword']").fill(Password);
});*/



//3rd APPROACH WAY 2

/*When('Enter the Username', async (dataTable:DataTable) => {
 //Read data from Data table with headers
let data = dataTable.hashes();

//Get the username from the firstrow and firstcloumn
//data[row_inderx]["objectkey"]

let username:string= data[0]["Username"];
//print data 

 console.log("username :" + username);

 //identify and enter username

  await page.locator("[name='txtUserName']").fill(username);
 

  });

  When('Enter the Password', async (dataTable:DataTable) => {

  //Read data from Data table with headers
let data = dataTable.hashes();

//Get the password from the firstrow and firstcloumn
//data[row_inderx]["objectkey"]

let password:string= data[0]["Password"];
//print data 

 console.log("password :" + password);

 //identify and enter password

 await page.locator("[name='txtPassword']").fill(password);
 

  });*/

//3rd APPROACH WAY 1

/*When('Enter the Username', async (dataTable:DataTable) => {
  //Read data from Data table
 let data:string[][] = dataTable.raw();

 //data[row_index][column_index]

 let username : string = data[0][0];

 //print data 

 console.log("username :" + username);

 //identify and ebter username

  await page.locator("[name='txtUserName']").fill(username);
 



});*/




/*When('Enter the Password', async (dataTable:DataTable) => {

  //Read data from Data table
 let data:string[][] = dataTable.raw();

 //data[row_index][column_index]

 let password : string = data[0][0];

 //print data 

 console.log("password :" + password);

 //identify and enter password

 await page.locator("[name='txtPassword']").fill(password);
 
  
});*/

When('click on login', async()=> {
   await page.locator("//input[@name='Submit']").click();
  });
Then('Verify Invalid Login', async () => {
  let errorMessage :string|null = await  page.locator("xpath=//font[text()='Invalid Login']").textContent();

  console.log("errorMessage :" + errorMessage);

  if(errorMessage =="Invalid Login")
  {
    console.log("error message displayed sucessfully -- TestPassed");
    
  }
else{
  throw new Error("Invalid Login verification failed");
}
});
/*Negative case -- Alert Verification
let alert_text :string="" ;

When('click on login', async()=> {
  alert_text = "";

  await new Promise<void>((resolve) => {
    page.once('dialog', async (dialog:Dialog) => {

      //do some action (verify text)
      alert_text = dialog.message();

      //print the text
      console.log("alert_text :"  + alert_text);

      await dialog.accept();
      resolve();
    });

    page.locator("//input[@name='Submit']").click();
  });
});

Then('Verify Alert Message', async() => {
  if(alert_text=="User Name not given!"){
    console.log("Alert text verified sucessfully -- TestPassed");
  }else{
    throw new Error(`Alert text not verified sucessfully -- got: "${alert_text}"`);
  }
});*/

Then('Verify Welcome Page', async ()  => {
  let text: string | null = await page.locator("xpath=//li[text()='Welcome srilatha']").textContent();
  
  console.log("text :" + text);

  if(text=="Welcome srilatha"){

    console.log(" Welcome page verified suceesfully -- TestPassed");
    
  }else{

    throw new Error(" Welcome page not verified suceesfully -- TestFailed");
  }
});

When('Click on logout', async () => {
 await page.locator("xpath=/html/body/div[3]/ul/li[3]/a").click();
});

After(async () => {
  if (browser) {
    await browser.close();
  }
});