// Sample data
const engineers = [
    { name: "John Doe", company: "Google", domain: "Software Engineer", role: "Data Scientist", experience: "5 Years" },
    { name: "John Doe", company: "Google", domain: "Software Engineer", role: "Data Scientist", experience: "5 Years" },
    { name: "John Doe", company: "Google", domain: "Software Engineer", role: "Data Scientist", experience: "5 Years" },

    { name: "Jane Smith", company: "Microsoft", domain: "Frontend Developer", role: "senior data analyst", experience: "3 Years" },
    { name: "Jane Smith", company: "Microsoft", domain: "Frontend Developer", role: "senior data analyst", experience: "3 Years" },
    { name: "Jane Smith", company: "Microsoft", domain: "Frontend Developer", role: "senior data analyst", experience: "3 Years" },
    { name: "Jane Smith", company: "Microsoft", domain: "Frontend Developer", role: "senior data analyst", experience: "3 Years" },

    { name: "Alice Johnson", company: "Wipro", domain: "Backend Developer", role: "junior developer", experience: "4 Years" },
    { name: "Alice Johnson", company: "Wipro", domain: "Backend Developer", role: "junior developer", experience: "4 Years" },
    { name: "Alice Johnson", company: "Wipro", domain: "Backend Developer", role: "junior developer", experience: "4 Years" },
    { name: "Alice Johnson", company: "Wipro", domain: "Backend Developer", role: "junior developer", experience: "4 Years" },
    { name: "Alice Johnson", company: "Wipro", domain: "Backend Developer", role: "junior developer", experience: "4 Years" },

    { name: "mitchell", company: "Amazon", domain: "Full Stack Developer", role: "asst manager", experience: "2 Years" },
    { name: "mitchell", company: "Amazon", domain: "Full Stack Developer", role: "asst manager", experience: "2 Years" },

    { name: "Bradman", company: "TCs", domain: ".NET Developer", role: "senior developer", experience: "3 Years" },
    { name: "Bradman", company: "TCs", domain: ".NET Developer", role: "senior developer", experience: "3 Years" },
    { name: "Bradman", company: "TCs", domain: ".NET Developer", role: "senior developer", experience: "3 Years" }
];

// Available domains
const domainNames = [".NET Developer", "Full Stack Developer", "Backend Developer", "Frontend Developer", "Software Engineer"];

let currentDomain = domainNames[0]; // Default domain

// Function to generate cards dynamically
function generateCards(domain) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear previous results

    engineers.forEach(engineer => {
        document.getElementById('listHeading').innerText = `List of ${domain}s`
        if (domain.toLowerCase() === engineer.domain.toLowerCase()) {
            let card = document.createElement("div");
            card.className = "relative bg-[#12091b] mx-6 w-[320px] h-[500px] p-6 rounded-[30px] text-center border-2 border-gray-500 shadow-md shadow-[#3b2958]";

            card.innerHTML = `
                <div class="w-36 h-36 bg-[#222] mt-4 rounded-full mx-auto flex items-center justify-center border-[3px] border-gray-400 shadow-md shadow-[#3b2958]">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" class="w-32 h-32 rounded-full">
                </div>
                <div class="mt-10">
                    <p class="mt-4 text-[#F8EFBE] text-3xl font-small">
                        ${engineer.name} <br>
                        <span class="text-lg">${engineer.role}</span> <br>
                        <span class="text-lg text-gray-400">${engineer.company}</span> <br>
                        <span class="text-lg">${engineer.experience} experience</span>
                    </p>
                </div>
            `;

            container.appendChild(card);
        }
    });

    if (container.innerHTML === "") {
        container.innerHTML = `<p class="text-white text-xl text-center">No engineers found for the given domain.</p>`;
    }
}

// Function to cycle through domains every 5 seconds
let index = 0;
function cycleDomains() {
    generateCards(domainNames[index]); // Generate cards for the current domain
    index = (index + 1) % domainNames.length; // Move to the next domain
    setTimeout(cycleDomains, 5000); // Call again after 5 seconds
}

// Start cycling through domains
cycleDomains();
