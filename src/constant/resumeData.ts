
import { AiFillFacebook } from "react-icons/ai";
// import { AiFillSkype } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const resumeData = {
    // 'imagebaseurl': 'https://ivy555.github.io/',
    'name': 'Gaurav kumar',
    'role': 'Frontend Developer',
    "dob": '17-March-1997',
    'website': 'https://gaurav-dev-mu.vercel.app',
    'phone': 'XXXXXX9648',
    'city': 'Chandigarh',
    'email': 'gaurav62462@gmail.com',
    'degree': 'Bachelor of Computer Application',
    'freelance': 'Available',
    // 'skypeid': 'gaurav@ajivainfotech.com',
    'title':'Hi! This is Gaurav.',
    'languages':['English','Hindi','Punjabi'],
    'aboutme': "I'm a freelance Front-End Developer who specializes in building beautiful, functional, and responsive user interfaces. I combine modern design with clean, scalable code to deliver great digital experiences across all devices. I work with technologies like React, Next.js, TypeScript — not just to make things look good, but to ensure everything works smoothly too. I focus on both design and functionality. Outside of work, I'm passionate about traveling, getting lost in music, and finding peace in Sufi poetry and vibes.",
    // 'infoWindow': 'SunFocus Solutions',
    'infoDescription': '1st floor, Plot No: C-127, Phase-8, Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 160072',
    // 'roleDescription': 'I like to learn and create applications in various parts of software development and like to learn about new technologies, write technical articles or simply play games in my free time.',
    'socialLinks': [
        {
            'name': 'linkedin',
            'url': 'https://www.linkedin.com/in/gaurav-kumar-186241202/',
            'icon': AiFillLinkedin
        },
        {
            'name': 'Facebook',
            'url': 'https://www.facebook.com/gouarv.saini',
            'icon': AiFillFacebook
        },
        {
            'name': 'Instagram',
            'url': 'https://www.linkedin.com/in/dilip-safi-438322a3/',
            'icon': AiOutlineInstagram
        },
        {
            'name': 'github',
            'url': 'http://github.com/Gaurav62462',
            'icon':  AiOutlineGithub
        },
    ],
    'address': '3rd Floor, Olivia 13, SBP City of Dreams, Sector 116, Mohali, Punjab',
    'education': [
        {
            'board': 'Punjab school education board',
            'class': '12th',
            'passingDate': 'March 2013- May 2014',
            'Achievements': 'Some Achievements'
        },
        {
            'board': 'Punjabi University Patiala',
            'class': 'Bachelor of Computer Application',
            'passingDate': 'July 2014 - May 2017',
            'Achievements': 'Some Achievements'
        }
    ],
    'workExperience': [
        
        {
            'companyName': 'ZestGeek Solutions',
            'specialization': 'Jh.Front-end Developer',
            'time': '23-Sep 2020 - 20-Jan 2023',
            'Achievements': 'Some Achievements',
            'role': [
                {name:'Led the development of responsive user interface components using React and TypeScript, enhancing user experience.'},
                   { name:'Collaborated with cross-functional teams to strategize and implement innovative UI features and applications.'}
            ]
        },
        {
            'companyName': 'Sunfocus Solutions',
            'specialization': 'Front-end Developer',
            'time': '9-Feb 2023 - 16-June 2023 ',
            'Achievements': 'Some Achievements',
            'role': [
                {name:'Enhanced and maintained responsive web applications using Nextjs.'},
            ]
        },
        {
            'companyName': 'Matrix marketers',
            'specialization': 'Reactjs Developer',
            'time': 'June 2023 - Dec 2023',
            'Achievements': 'Some Achievements',
            'role': [
                {name:'Developed and implemented responsive web applications using Next.js and Material UI for visually appealing and functional interfaces.'},
            ]
        },
        {
            'companyName': 'Freelancer',
            'specialization': 'Front-end Developer',
            'time': 'Jan 2024 - Nov 2024',
            'Achievements': 'Some Achievements',
            'role': [
                {name:'Built custom web applications leveraging Next.js, TypeScript, and Tailwind CSS, focusing on scalability and responsiveness.'},
                {name:'Demonstrated flexibility and adaptability to client requirements, creating customized solutions in a freelance capacity.'},
            ]
        },
    ],
    'projects': [
        {
            'name': 'Cloud Fence',
            'description': 'We can create policies , detected and controlled traffic activity on CloudFence.',
            'projectLogo':'cloud-fence.svg'
        },
        {
            'name': 'Like Play',
            'description': 'This is the admin panel of a social media app.This is create to manage Profiles, Reports, Rost and user actions.',
            'projectLogo':'likeplaylogo.png'
        },
        {
            'name': 'Beehive',
            'description': 'The Beehive project focuses on distributing coding tasks, allowing you to accept tasks to work on or skip accordingly.',
            'projectLogo':'beehive_icon.png'
        },
        {
            'name': 'Carbonate',
            'description': 'Carbonate is a HR management system to maintain employee data, including projects, leaves and payroll.',
            'projectLogo':'carbonate.svg'
        },
        {
            'name': 'UChat',
            'description': 'Create a extension which is integrated in Fireberry CRM.It will open the tenant of Omnichannel in Fireberry to manage and chat.',
            'projectLogo':'wow-by-ebs.png'
        },
        {
            'name': 'Qricle',
            'description': 'This is the Hotel Management admin panel project. In this admin can manage Room, Guest, Employee etc. ',
            'projectLogo':'qricle.jpeg'
        },
        {
            'name': 'VLS',
            'description': 'VLS is a school App , where princple can create teacher, students, classes, subjects etc. Manage all the things as in school.',
            'projectLogo':'vls.png'
        }
    ],
 'skills' : [
        { 'skillName': 'Redux' },
        { 'skillName': 'Storybook' },
        { 'skillName': 'Material UI' },
        { 'skillName': 'Chakra UI' },
        { 'skillName': 'Tailwind Css' },
        { 'skillName': 'CSS' },
        { 'skillName': 'Git' },
        { 'skillName': 'NPM' },
        { 'skillName': 'Hooks' },
        { 'skillName': 'Context API' },
        { 'skillName': 'Axios' },
        { 'skillName': 'RESTful APIs' },
        { 'skillName': 'Eslint' },
        { 'skillName': 'Redux-Saga' },
        { 'skillName': 'HTML' },
    ],
    'lang' : [
            { 'skillName': 'JavaScript', 'value': 80 },
            { 'skillName': 'Typescript', 'value': 60 },
            { 'skillName': 'Reactjs', 'value': 90 },
            { 'skillName': 'Nextjs', 'value': 70 },
        ]
}
export default resumeData;
