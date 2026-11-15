import { createSlice } from "@reduxjs/toolkit";

const CoursesSlice = createSlice({
    name: 'courses',
    initialState: {
        coursesList: [
    {
        id: 1,
        name: 'MERN Stack',
        batch: 9,
        duration: '12 weeks',
        language: 'English',
        Price: 1000,
        description: 'Build dynamic full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&q=80'
    },
    
    {
        id: 2,
        name: 'Data Science',
        batch: 7,
        duration: '10 weeks',
        language: 'Telugu',
        Price: 900,
        description: 'Explore data analysis, statistics, machine learning, and visualization to extract meaningful insights.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 3,
        name: 'Data Analytics',
        batch: 2,
        duration: '8 weeks',
        language: 'English',
        Price: 800,
        description: 'Learn to collect, clean, analyze, and visualize data to make better business decisions.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 4,
        name: 'GenAI',
        batch: 3,
        duration: '12 weeks',
        language: 'English',
        Price: 1000,
        description: 'Learn Generative AI tools and techniques to create text, images, and intelligent applications.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&q=80'
    }
    ,
    {
        id: 5,
        name: 'Python Programming',
        batch: 4,
        duration: '8 weeks',
        language: 'Telugu',
        Price: 600,
        description: 'Master Python fundamentals, functions, object-oriented programming, and practical coding skills.',
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 6,
        name: 'Java Programming',
        batch: 1,
        duration: '10 weeks',
        language: 'English',
        Price: 800,
        description: 'Learn Java programming, object-oriented concepts, exception handling, and application development.',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 7,
        name: 'Full Stack Development',
        batch: 6,
        duration: '12 weeks',
        language: 'Telugu',
        Price: 1000,
        description: 'Develop complete web applications by learning frontend, backend, databases, and deployment.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 8,
        name: 'Machine Learning',
        batch: 3,
        duration: '10 weeks',
        language: 'English',
        Price: 900,
        description: 'Understand machine learning algorithms and build predictive models using real-world datasets.',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 9,
        name: 'Artificial Intelligence',
        batch: 10,
        duration: '12 weeks',
        language: 'Telugu',
        Price: 1000,
        description: 'Explore AI concepts, intelligent systems, neural networks, and real-world AI applications.',
        image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 10,
        name: 'Web Development',
        batch: 5,
        duration: '8 weeks',
        language: 'English',
        Price: 0,
        description: 'Learn HTML, CSS, JavaScript, and Bootstrap to create responsive and interactive websites.',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 11,
        name: 'React JS',
        batch: 8,
        duration: '6 weeks',
        language: 'Telugu',
        Price: 600,
        description: 'Build interactive user interfaces using React components, hooks, props, and state management.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 12,
        name: 'Node JS',
        batch: 2,
        duration: '6 weeks',
        language: 'English',
        Price: 600,
        description: 'Learn server-side JavaScript, REST APIs, asynchronous programming, and backend development.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 13,
        name: 'AWS Cloud Computing',
        batch: 7,
        duration: '10 weeks',
        language: 'English',
        Price: 900,
        description: 'Gain practical knowledge of AWS services, cloud infrastructure, storage, networking, and deployment.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 14,
        name: 'Cyber Security',
        batch: 4,
        duration: '12 weeks',
        language: 'Telugu',
        Price: 1000,
        description: 'Learn network security, ethical hacking fundamentals, threat detection, and data protection.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 15,
        name: 'SQL and Database Management',
        batch: 1,
        duration: '4 weeks',
        language: 'English',
        Price: 0,
        description: 'Master SQL queries, database design, joins, subqueries, and relational database management.',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 16,
        name: 'Power BI',
        batch: 9,
        duration: '6 weeks',
        language: 'Telugu',
        Price: 500,
        description: 'Create interactive dashboards and business reports using Power BI, DAX, and data visualization.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 17,
        name: 'Advanced Excel',
        batch: 5,
        duration: '4 weeks',
        language: 'English',
        Price: 0,
        description: 'Learn advanced Excel formulas, pivot tables, charts, data analysis, and automation techniques.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 18,
        name: 'UI/UX Design',
        batch: 6,
        duration: '8 weeks',
        language: 'Telugu',
        Price: 700,
        description: 'Design attractive and user-friendly interfaces using wireframing, prototyping, and design principles.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 19,
        name: 'C Programming',
        batch: 10,
        duration: '4 weeks',
        language: 'English',
        Price: 0,
        description: 'Understand programming fundamentals, pointers, arrays, functions, and memory management using C.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 20,
        name: 'Python for Data Analytics',
        batch: 3,
        duration: '8 weeks',
        language: 'Telugu',
        Price: 800,
        description: 'Analyze and visualize datasets using Python libraries such as NumPy, Pandas, and Matplotlib.',
        image: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 21,
        name: 'DevOps Engineering',
        batch: 4,
        duration: '12 weeks',
        language: 'English',
        Price: 1000,
        description: 'Learn CI/CD pipelines, Docker, Kubernetes, Git, and automation for modern software delivery.',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 22,
        name: 'Android App Development',
        batch: 8,
        duration: '10 weeks',
        language: 'Telugu',
        Price: 900,
        description: 'Develop Android mobile applications with modern UI components, programming, and app integration.',
        image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'    },
    {
        id: 23,
        name: 'Cloud Computing',
        batch: 2,
        duration: '8 weeks',
        language: 'English',
        Price: 800,
        description: 'Understand cloud architecture, virtualization, cloud storage, networking, and scalable infrastructure.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 24,
        name: 'Django Framework',
        batch: 6,
        duration: '10 weeks',
        language: 'Telugu',
        Price: 850,
        description: 'Build secure and scalable Python web applications using Django, models, views, and templates.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 25,
        name: 'PHP and MySQL',
        batch: 1,
        duration: '8 weeks',
        language: 'English',
        Price: 600,
        description: 'Create dynamic websites and database-driven applications using PHP and MySQL.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 26,
        name: 'Digital Marketing',
        batch: 9,
        duration: '6 weeks',
        language: 'Telugu',
        Price: 0,
        description: 'Explore SEO, social media marketing, content marketing, email campaigns, and online advertising.',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 27,
        name: 'Blockchain Development',
        batch: 5,
        duration: '12 weeks',
        language: 'English',
        Price: 1000,
        description: 'Understand blockchain technology, smart contracts, decentralized applications, and cryptocurrency fundamentals.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 28,
        name: 'Data Structures and Algorithms',
        batch: 10,
        duration: '10 weeks',
        language: 'Telugu',
        Price: 900,
        description: 'Strengthen problem-solving skills through arrays, linked lists, trees, graphs, sorting, and searching.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 29,
        name: 'Flutter Development',
        batch: 3,
        duration: '8 weeks',
        language: 'English',
        Price: 750,
        description: 'Create cross-platform mobile applications for Android and iOS using Flutter and Dart.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 30,
        name: 'Generative AI with Python',
        batch: 7,
        duration: '12 weeks',
        language: 'Telugu',
        Price: 1000,
        description: 'Build AI-powered applications using Python, LLMs, prompt engineering, and generative AI frameworks.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80'
    }
],
        selectedCourse:null,
        updateCourse:null         
    },
    reducers:{
        addCourses(state,action){
            state.coursesList.push(action.payload)
        }, 
        getOneCourse(state,action){
            state.selectedCourse=state.coursesList.find((obj)=>obj.id==action.payload)

        },
        deleteCourses(state,action){
            var ind=state.coursesList.findIndex((obj)=>obj.id==action.payload.id)
            if(ind!=-1){
                state.coursesList.splice(ind,1);
            }
        },
       
        selectToUpdate(state,action){
            state.updateCourse=state.coursesList.find((obj)=>obj.id==action.payload)
        },
        updateCourse(state,action){
            var ind=state.coursesList.findIndex((obj)=>obj.id==action.payload.id)
            if(ind!=-1){
                state.coursesList.splice(ind,1,action.payload)
            }
        }
    }
})
export const{addCourses,deleteCourses,getOneCourse,selectToUpdate,updateCourse}=CoursesSlice.actions;
export default CoursesSlice.reducer;