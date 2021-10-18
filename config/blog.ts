export interface I_Blog {
    title: string
    description: string
    image: string
    date: string
    label: string
    url: string
}

export const blogs : I_Blog[] = [
    {
        title: 'Get Started with Go!',
        description: 'I use an Arch based Linux distribution so I am going to install golang through pacman. If you are a Mac or a Windows user you can see the installation procedure over here.',
        image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--P9CJWVot--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ipmlvpsujrm91uh4cy86.jpg',
        date: '30 May 2021',
        label: 'Go lang',
        url : 'https://dev.to/aarushgoyal/get-started-with-go-1d1m'
    }, 
    {
        title: 'How to find your dream job or dream employee from a unique decentralized job platform ?',
        description: `The world is changing and so is the way we work. We have evolved from a world where a job seeker is looking for a job to a world where a job seeker is looking for a perfect job. In the past, the job market was a seller's market as most of the jobs were available with the companies and the job seekers had to search for the perfect job. In the present scenario, the job market has become a buyer's market as most of the jobs`,
        image: 'https://jobunicorn.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1632200070579%2FIBmPIUYaf.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
        date: '21 Sep 2021',
        label: 'Job Unicorn',
        url : 'https://jobunicorn.hashnode.dev/how-to-find-your-dream-job-or-dream-employee-from-a-unique-decentralized-job-platform'
    }
]