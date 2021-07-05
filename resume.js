//                                      Upper-Part
//-------------------------------------------------------------------------------
// Profile Head --------
var profile=document.createElement("div");
// document.body.style.backgroundColor="#212F3D";

// designing

profile.style.height="45vh";
profile.style.width="60vw";
profile.style.backgroundColor="gray";
profile.style.margin="auto";


// appending profile head as child
document.body.appendChild(profile);

// Profile Picture ----
var imageDiv=document.createElement("div");
imageDiv.style.height="31vh";
imageDiv.style.width="15vw";
imageDiv.style.backgroundSize="cover";
imageDiv.style.backgroundImage="url('profe.jpg')";
imageDiv.style.borderRadius="54%";
imageDiv.style.margin="40.5vw";
imageDiv.style.marginTop="-24vh";

// appending image as child to html body
document.body.appendChild(imageDiv);


//Name - Div

var Boyname=document.createElement("div");
// Boyname.style.height="2000px";
// Boyname.style.width="3000px";
Boyname.style.backgroundColor="#828200";
Boyname.innerText="John Doe";
Boyname.style.marginTop="-95.5vh";
Boyname.style.fontSize="2.5rem";
Boyname.style.fontFamily="fantasy";
Boyname.style.height="4.5rem";
Boyname.style.width="25vw"
Boyname.style.marginLeft="35.5vw";
Boyname.style.display="flex";
// Boyname.style.textAlign="center";
// Boyname.style.verticalAlign="middle";
// Boyname.style.lineHeight="4.5rem";
Boyname.style.justifyContent="center";
Boyname.style.alignItems="center";
Boyname.style.wordSpacing="10px";

document.body.appendChild(Boyname);

// para ---
var para=document.createElement("p");
para.innerText="Varanasi India  | +919140780963 | dummyemail.com | www.domain.com |"
para.style.wordSpacing="5px";
para.style.fontSize="1.2rem";
para.style.fontWeight="550";
para.style.marginLeft="25vw"
document.body.appendChild(para);

var underLine=document.createElement("hr");
// underLine.style.size="100px";
underLine.style.width="850px";
underLine.style.borderTop="3px solid black";
// underLine.style.color="black";
document.body.appendChild(underLine);


//                                      Intro - Part
//  ---------------------------------------------------------------------------------------------------------

//intro main div

var intro=document.createElement("div");
intro.style.height="100vh";
intro.style.width="60vw";
intro.style.backgroundColor="white";
intro.style.margin="auto";
intro.style.display="flex";
document.body.appendChild(intro);

// intro div first part 

var work=document.createElement("div");
intro.appendChild(work);
work.style.height="100%";
work.style.width="45%";
work.style.backgroundColor="white";

// working on  profile div
var Profilediv=document.createElement("div");
work.appendChild(Profilediv);
Profilediv.innerText="Profile"
Profilediv.style.fontSize="1.7rem";
Profilediv.style.fontWeight="600";
Profilediv.style.marginLeft="15%";
Profilediv.style.marginTop="6%";
// Profile text
var introText=document.createElement("div");
work.appendChild(introText);
introText.innerText="I am a full Stack Developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN.";
introText.style.marginTop="10px";
introText.style.fontSize="0.9rem";
introText.style.fontWeight="550";
introText.style.marginLeft="10px";

//working Skill div --
var Profilediv=document.createElement("div");
work.appendChild(Profilediv);
Profilediv.innerText="Skill"
Profilediv.style.fontSize="1.7rem";
Profilediv.style.fontWeight="600";
Profilediv.style.marginLeft="15%";
Profilediv.style.marginTop="6%";
// Profile text
var introText=document.createElement("div");
work.appendChild(introText);
introText.innerText="Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.";
introText.style.marginTop="10px";
introText.style.fontSize="0.9rem";
introText.style.fontWeight="550";
introText.style.marginLeft="10px";

//working on technical skill

var Profilediv=document.createElement("div");
work.appendChild(Profilediv);
Profilediv.innerText="Technical Skill"
Profilediv.style.fontSize="1.7rem";
Profilediv.style.fontWeight="600";
Profilediv.style.marginLeft="15%";
Profilediv.style.marginTop="6%";
// Profile text
var introText=document.createElement("div");
work.appendChild(introText);
introText.innerText=" JavaScript";
introText.style.marginTop="10px";
introText.style.fontSize="1.3rem";
introText.style.fontWeight="550";
introText.style.marginLeft="10px";
var inputElem=document.createElement("input");
inputElem.setAttribute("type","range");
inputElem.style.marginLeft="20px";
introText.appendChild(inputElem);

//Work Experience --
var Profilediv=document.createElement("div");
work.appendChild(Profilediv);
Profilediv.innerText="Work Experience";
Profilediv.style.fontSize="1.7rem";
Profilediv.style.fontWeight="600";
Profilediv.style.marginLeft="15%";
Profilediv.style.marginTop="6%";
// Profile text
var introText=document.createElement("div");
work.appendChild(introText);
introText.innerText="I have 3 years of experience as a freelance on codementor where I have worked on python assignments on a regular basis. I have 5 star rating from clients all acoss the globe. I have worked as a full time role for company 1 and company 2. ";
introText.style.marginTop="10px";
introText.style.fontSize="0.9rem";
introText.style.fontWeight="550";
introText.style.marginLeft="10px";

// Company 1
var Profilediv=document.createElement("div");
work.appendChild(Profilediv);
Profilediv.innerText="Company 1";
Profilediv.style.fontSize="1.7rem";
Profilediv.style.fontWeight="600";
Profilediv.style.marginLeft="15%";
Profilediv.style.marginTop="6%";
// Profile text
var introText=document.createElement("div");
work.appendChild(introText);
introText.innerText=" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
introText.style.marginTop="10px";
introText.style.fontSize="0.9rem";
introText.style.fontWeight="550";
introText.style.marginLeft="10px";


//-------------------------------------------------------------------------------------------------------------
// Creating vertical Line --

var vertical=document.createElement("div");
intro.appendChild(vertical);
vertical.style.width="10%";
var verticalElem=document.createElement("div");
vertical.appendChild(verticalElem);
verticalElem.style.width="2px";
verticalElem.style.height="90%"
verticalElem.style.backgroundColor="black";
verticalElem.style.border="1px solid black";
verticalElem.style.margin="auto";
verticalElem.style.marginTop="30px"


//intro div second part -

var education=document.createElement("div");
intro.appendChild(education);
education.style.height="100%";
education.style.width="45%";
education.style.backgroundColor="white";

// Company 2 -----

var Profilediv=document.createElement("div");
education.appendChild(Profilediv);
Profilediv.innerText="Company 2";
Profilediv.style.fontSize="1.7rem";
Profilediv.style.fontWeight="600";
Profilediv.style.marginLeft="15%";
Profilediv.style.marginTop="6%";
// Profile text
var introText=document.createElement("div");
education.appendChild(introText);
introText.innerText=" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.";
introText.style.marginTop="10px";
introText.style.fontSize="0.9rem";
introText.style.fontWeight="550";
introText.style.marginLeft="10px";


//Company 3

var Profilediv=document.createElement("div");
education.appendChild(Profilediv);
Profilediv.innerText="Company 3";
Profilediv.style.fontSize="1.7rem";
Profilediv.style.fontWeight="600";
Profilediv.style.marginLeft="15%";
Profilediv.style.marginTop="6%";
// Profile text
var introText=document.createElement("div");
education.appendChild(introText);
introText.innerText=" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
introText.style.marginTop="10px";
introText.style.fontSize="0.9rem";
introText.style.fontWeight="550";
introText.style.marginLeft="10px";


// Education
var educationDiv=document.createElement("div");
educationDiv.innerText="Education";
educationDiv.style.fontSize="1.9rem";
educationDiv.style.fontWeight="600";
educationDiv.style.marginTop="2rem";
educationDiv.style.marginLeft="30%"
education.appendChild(educationDiv);


var Profilediv=document.createElement("div");
education.appendChild(Profilediv);
Profilediv.innerText="IIT - BHU";
Profilediv.style.fontSize="1.7rem";
Profilediv.style.fontWeight="600";
Profilediv.style.marginLeft="15%";
Profilediv.style.marginTop="6%";
// Profile text
var introText=document.createElement("div");
education.appendChild(introText);
introText.innerText=" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
introText.style.marginTop="10px";
introText.style.fontSize="0.9rem";
introText.style.fontWeight="550";
introText.style.marginLeft="10px";