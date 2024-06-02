# <div style="text-align: center;">Water Tracker Application </div>
<span style="color:red">The application's backend is hosted on the free Cloudinary service, which may cause a delay when performing the first action that requires a response from the server side of the application.</span>
## <div style="text-align: center;">Overview</div>

<span style="font-weight:bold;">Stay Hydrated and Healthy with WaterTracker!</span>

With WaterTracker, you can:

- <span style="font-weight:bold;">Create Your Personal Account:</span> Get started with a personalized experience.
- <span style="font-weight:bold;">Calculate Your Optimal Daily Water Intake:</span> Our smart calculator uses your gender, weight, phisical activity time to determine the perfect amount of water you need each day.
- <span style="font-weight:bold;">Track Your Daily Water Consumption:</span> Easily log every glass and stay on top of your hydration goals.
- <span style="font-weight:bold;">Access Comprehensive Water Consumption Stats:</span> Use our intuitive calendar to review your hydration history for any period.

<span style="font-weight:bold;">Why Choose WaterTracker?</span>

Using WaterTracker will not only help you stay hydrated but also boost your overall health and well-being. Join our community of health enthusiasts and start feeling better today!

<span style="font-weight:bold;">Record Your Water Intake with Ease:</span> Our user-friendly interface makes it simple to log your water consumption anytime, anywhere.
<div style="
padding: 20px;
text-align: center;
font-weight:bold;">English and Deutsch interfaces are available.</div>



<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots/main-interface.png" alt="Water Tracker Screenshot">
</div>

## Table of Contents

- [Components](#components)
  - [Header](#header)
  - [Pages](#pages)
  - [Main Components](#main-components)
- [Modals](#modals)
  - [UserLogoModal](#userlogomodal)
  - [SettingModal](#settingmodal)
  - [UserLogoutModal](#userlogoutmodal)
  - [DailyNormaModal](#dailynormamodal)
  - [TodayListModal](#todaylistmodal)

## Components

### Header

#### Non-Authorized User
- Logo: Displays the application logo and redirects to the WelcomePage for non-registered users.
- UserAuth: Button that redirects to the SigninPage.
<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots//nonAuthUserMenu.png" alt="Water Tracker Screenshot">
</div>

#### Authorized User
- Logo: Displays the application logo and redirects to the HomePage for registered users.
- UserLogo: Button to open the UserLogoModal, displaying user info and options to edit or log out.
- Lenguege swither: You can pick English or Deutsch interface.
<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots/auth-user-header1.png" alt="Water Header Screenshot1">
</div>


### Pages

#### WelcomePage
- Route: /welcome
- Displayed for non-authorized users.
<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots/greetings.png" alt="Water Tracker Screenshot">
</div>

#### SignupPage
- Route: /signup
- Contains the AuthForm for user registration.
- Validates all form fields.
- Automatically logs in the user after successful registration and redirects to HomePage.
<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots/signup.png" alt="Water Tracker Screenshot">
</div>

#### SigninPage
- Route: /signin
- Logs in the user and redirects to HomePage.
- Displays error notifications for failed login attempts.
<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots/signin.png" alt="Water Tracker Screenshot">
</div>

#### HomePage
<span style="font-weight:bold;">Route: /home</span>
<span style="font-weight:bold;">Main page for authorized users with containers for:</span> 
- DailyNorma: Displays user's daily water intake goal.
- WaterRatioPanel: Shows the ratio of consumed to planned water intake and opens a modal for logging water intake.
- TodayWaterList: Lists water portions consumed throughout the day.
- MonthStatsTable: Allows users to view water consumption statistics for any day of the month.


### Main Components
1. DailyNorma: Displays planned daily water intake.
2. WaterRatioPanel: Shows the ratio of consumed to planned water intake and opens a modal for logging water intake.
3. TodayWaterList: Displays a list of water portions consumed throughout the day.
4. MonthStatsTable: Allows users to view water consumption statistics for any day of the month.
<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots/home.png" alt="Water Tracker Homepage">
</div>

### Modals

#### UserLogoModal
<span style="font-weight:bold;">Contains buttons:</span>
- Setting: Opens the SettingModal.
- LogoutBtn: Opens the UserLogoutModal.
<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots/userLogoModal.png" alt="Water Tracker Screenshot">
</div>

#### SettingModal
<span style="font-weight:bold;">Renders a form with user information fields:</span>
- Your photo: Upload a photo.
- Your gender identity: Radio buttons for gender selection.
- Your name: Input for name.
- E-mail: Input for email.
- Password: Inputs for changing the password.
<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots/settingModal.png" alt="Water Tracker Screenshot">
</div>

<span style="font-weight:bold;">Modal closes on:</span>
- Clicking the backdrop.
- Pressing Escape.
- Submitting the form after successful server response.

#### UserLogoutModal
<span style="font-weight:bold;">Modal with:</span>
- Header: "Log out"
- Subheader: "Do you really want to leave?"
- Buttons: "Cancel" and "Logout"
<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots/logout.png" alt="Water Tracker Screenshot">
</div>


#### DailyNormaModal
<span style="font-weight:bold;">Consists of:</span>
- Header: "My daily norma"
- Description: Description of the water intake formula.
- Form: Form with fields for gender, weight, activity time, and calculated water intake.
- Save button: Button to submit data to the backend.
<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots/dalyNormaModal.png" alt="Water Tracker Screenshot">
</div>

### TodayList
- Allows users to log or edit water intake amounts.
<div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <img src="./src/img/screenshots/todaywaterlist.png" alt="Water Tracker Screenshot">
</div>