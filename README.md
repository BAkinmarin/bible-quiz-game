# Bible Quiz Game
## An interactive and educative quiz on the Bible

![am I responsive screenshot]()

## **[Live site]()**

------------------------------------------------------------------

## **[Repository]()**
------------------------------------------------------------------
  
## Table of contents

 1. [ UX ](#ux)
 2. [ Features ](#features)  
 3. [ Features Left to Implement ](#left)  
 4. [ Technology used ](#tech) 
 5. [ Testing ](#testing)  
 6. [ Bugs ](#bugs)  
 7. [ Deployment](#deployment)
 8. [ Credits](#credits)
 9. [ Content](#content)  
 10. [ Acknowledgements](#acknowledgements)  

## UX

<a name="ux"></a>
### Pre-project Planning

# UX design

## Strategy Plane

## User Stories

### User 

## Scope Plane

## Structure Plane

**Home Page**

**About**

**Contact**

## Skeleton Plane

### Home Page Desktop Wireframe
![Home Page Desktop Wireframe]()

### Home Page mobile wireframe
![Home page mobile responsive Wireframe]()

## Surface Plane

### Color

### Typography - 

>The font's chosen for this project were:

 - Lato
 - Sans serif

> The rationale was that I wanted all of the information provided on the website to be clear, concise and without any unnecessary distractions. 
> My focus was to also assist with users who may have visual impairments

## Features

<a name="features"></a>
### index.html

#### Navigation Bar
![Navigation Bar]()

>

#### Footer
![Footer]()

> Flex footer used to showcase social media icons as well as physical address and opening times. I decided to include the opening times in a table as I felt it was aestetically pleasing compared to traditionally just the text content.

### about.html

#### About
![About Section]()

> The about section was initially intended to be a section about the garage history and then information about the bio of a few of the staff with image - text side by side. As the project progressed I decided to reduce this section for now.

### portfolio.html

#### Portfolio
![Portfolio Images](assets/images/features/feature-portfolio.png)

> The portfolio section was originally intended to be a services page and possibly include some click to expand content, however as I included the services in the home page I felt it was more appropriate to add a portfolio of work being done and of completed work.

### contact.html

#### Contact Form
![Contact Form](assets/images/features/feature-form.png)

> Initially when I was creating the form element I used the blue color as a background as a placeholder while I was working. The original thought was that I would display a background image with the content of the form sitting on top. In hindsight it probably would have been a more visually appealing solution but I felt I had already overlay content in the hero section of index.html and wanted to try different approaches in this project. 

> I also think the color works with the minimalistic design of the site and it flows well into the contact numbers and map section.

> Please note that while the contact form does collect and pass the requested data as tested with the code institute form dump link, this form take the user to a created html page that gives them a form submission message. As Javascript was not part of the brief for this project it was not possible to make this a fully functioning form.

> This decision to forward to a new page was taken to improve user experience when using this project.

#### Map & Contact Numbers
![Map Area](assets/images/features/feature-map.png)

> Instead of using a map from my own google developer account I used an i-frame from maps.ie as it was a convenient and quick solution. 


<a name="left"></a>
# Features Left to implement


### Home page
> In the future I would like to include a side element banner to promote special offers that the repair shop may want to offer from time to time.

> I would like to add pop up modals to the services section to explain what the typical faults might be, costs to fix and estimated timeframes.

>I would also like to make the service tiles as modals that onClick they would pop open with information about average issues, cost and duration it would take to fix. 


>I would like to add a carousel section to the testimonial cards that would auto move in a rotational basis and consist of about 5-8 different testimonials.

### About Page
> In the future I would like to add profiles to the about page with a breakdown of all the staff at the business. Including their name, image, what they specialize in and brief bio about themselves.

### Portfolio
> I would like to add a lightbox type gallery for these photos so that when a user clicks on them it will pop up and allow them to scroll through them as their leisure.
> I would also like to add side by side before and after photos. Ideally with a scroll option for the user to see the work done.

### Contact Us
>I have not developed a back end for the contact form and this would be high on my priority list to ensure that e-mails with booking requests are being sent both to the business & confirmation to the customer of what they requested.


>I would like to add a WhatsApp option or similar style contact method for business to allow customers to message the business for a more real-time response, whether that be for 24/7 breakdown or general queries


>I would also like to add call from browser to save the user having to copy and paste the phone number.

### Additional Page ideas
>I would add a careers page for potential young adults who would be interested in apprentices to submit their info.

>I would add a facility for users to actually book in, in a realtime booking system.

<a name="tech"></a>
# Technology Used
### Html
> Used to structure my webpages and the bones of any web project

### CSS
> Used to style and add layout to my project.

### Font Awesome
> Used for all the icons in this project

### GoogleFonts
> Used for all the fonts used in this project and to compare potential fonts.

### Googlemap API
> Used to embed I-frame on the contact page of a fictional business based in a real location in Belfast, Norther Ireland.

### Canva
> Used to create the favicon logo

### Online-Convert.com
> Used to convert files from png to webp to reduce size and improve web loading speed.

<a name="testing"></a>
# Testing
> Testing on this project was mainly done manually by myself and a few friends to determine site usability, responsiveness and ensure it is intuitive to a completely new user.

### Testing Phase

**Testing for links and Form**
| Test |Outcome  |
|--|--|
|All links on Navigation lead to their correct pages| Pass  |
|Contact us button leads to contact form on contact us page| Pass
|Footer social links all lead to their respective social media sites |Pass|
|Contact form submits when all criteria is filled correctly| Pass  |
|User prevented from submitting form without correct elements| Pass|
|Form Validation presents when incorrect input type is entered |Pass|

**Testing for responsiveness**
| Test |Outcome  |
|--|--|
|Home page, about, portfolio, contact us displays correctly on screens larger than 950px|Pass |
|Home page, about, portfolio, contact us displays correctly on screens smaller than 950px |Pass  

### User testing

**User testing Challenge**

> 5 users are given some basic tasks prior to visiting web page and the results totaled to give result (20% per successful user result.)

| Test | Result |
|--|--|
|Upon arrival to website please navigate to where you would expect to find a contact form| 100%|
|Please navigate to the Facebook social of this business|100%  |
|Please fill in contact form with your information and preference in the marketing button| 100%|
|Please provide me with a contact number of 24/7 breakdown| 100%  |
|Please navigate to the Portfolio page and count how many images there are | 100%  |

**User responsive testing**

> 5 users were asked to view the website on their mobile devices and/or tablets to provide any feedback on errors or page overlapping issues.

| Test | Result |
|--|--|
|Issues Reported| None|

## Google Lighthouse Testing

### index.html

![Google Lighthouse index.html](assets/images/testing-scans/lighthouse-index.png)

### about.html

![Google Lighthouse about.html](assets/images/testing-scans/lighthouse-about.png)

### portfolio.html
![Google Lighthouse portfolio.html](assets/images/testing-scans/lighthouse-portfolio.png)

### contact.html
![Google Lighthouse contact.html](assets/images/testing-scans/lighthouse-contact.png)


## HTML Validation

### index.html
![W3 index.html Check](assets/images/testing-scans/index-w3-check.png)
#### Result: No Errors

### about.html
![W3 about.html Check](assets/images/testing-scans/about-w3-check.png)
#### Result: No Errors

### portfolio.html
![W3 about.html Check](assets/images/testing-scans/gallery-w3-check.png)
#### Result: No Errors, 1 warning about the section missing a heading. Page heading appears for the portfolio above and requires no additional content.

### contact.html
![W3 about.html Check](assets/images/testing-scans/contact-w3-check.png)
#### Result: No Errors

### contact-complete.html
![W3 about.html Check](assets/images/testing-scans/form-complete-w3-check.png)
#### Result: No Errors

## CSS Validation

### contact-complete.html
![W3 about.html Check](assets/images/testing-scans/css-w3jigsaw-check.png)
#### Result: No Errors

<a name="bugs"></a>
## **Bugs**
> Issues with centering content on the hero overlay. **fixed**

> Decided to improve the flow of the page that the parralax would be better between the two content sections. **fixed**

> Original image just didnt fit the flow of the page nor the style of the page **fixed**

> Font awesome social media icons showing as squares even though the script link is in the head and icon tags are correct. **fixed**

> Issue with footer content overlapping and not centering. **fixed**

> issue with services overlapping on mobile. (fixed, was targetting wrong element container) **fixed**

> Contrast issue noted on lighthouse for the tag elements on the testimonials.(fixed, made colour darker and increased font size and weight). **fixed**

> Images not in correct aspect ratio. (removed placeholder images and downloaded them in the size needed.) **fixed**

> Bug appeared which some images did not show when deployed. Issue resolved as some images were using absolute file paths and not relative. **fixed**

<a name="deployment"></a>
## Deployment

> To deploy the project I followed these steps starting from the main project repository [here](https://github.com/Alan-Bushell/belfast-auto-repairs).

 1. Clicked on `Settings` on the navigation menu in the repository
 2. I then selected the `Pages` menu on the side bar.
 3. In the first dropdown menu labeled `Source` I selected the branch of the name `main` from the dropdown.
 4. In the next dropdown labeled `/root` I left as the default option.
 5. Selected Save
 
> I then received a notification from GitHub that my project is being deployed and after about 1 minute & a couple of refreshes of the page it was ready and live.

<a name="credits"></a>
## Credits

### All images sourced from pexels.com. Links for images included below

> 

<a name="content"></a>
## Content & Resources

### NotSoBoringBible.com
> Used for quiz questions.

### Pexels.com
> Images used in this project.

### w3 schools
> Used for general lookup for HTML and CSS synthax queries.

### Stack Overflow
> Used to query issues relating to overlapping CSS issues.

### csstricks.com
> Used for help with flex box and alignment.

### Code Institute
> Project created in line with course content and within project 2 scope.

<a name="acknowlegements"></a>
## Acknowledgements

### Alan Bushell
> My mentor who provided me with constructive feedback and positive reinforcement where applicable.