// Sample Data
const internships = [
    {
        id: 1,
        title: "Agricultural Research Intern",
        company: "Ministry of Agriculture",
        type: "government",
        duration: "3 months",
        stipend: "₹10,000/month",
        description: "Research on sustainable farming practices"
    },
    {
        id: 2,
        title: "Farm Management Intern",
        company: "AgriTech Solutions",
        type: "private",
        duration: "6 months",
        stipend: "₹15,000/month",
        description: "Learn modern farm management techniques"
    },
    {
        id: 3,
        title: "Crop Science Internship",
        company: "National Agricultural Institute",
        type: "government",
        duration: "4 months",
        stipend: "₹8,000/month",
        description: "Study crop genetics and soil science"
    },
    {
        id: 4,
        title: "Dairy Industry Intern",
        company: "FarmFresh Dairy",
        type: "private",
        duration: "6 months",
        stipend: "₹12,000/month",
        description: "Hands-on experience in dairy management"
    },
    {
        id: 5,
        title: "Agricultural Economics",
        company: "Agricultural Department",
        type: "government",
        duration: "3 months",
        stipend: "₹9,000/month",
        description: "Learn agricultural economics and policy"
    },
    {
        id: 6,
        title: "Precision Agriculture Intern",
        company: "AgriTech Innovators",
        type: "private",
        duration: "6 months",
        stipend: "₹18,000/month",
        description: "Work with IoT and drones in farming"
    }
];

const courses = [
    {
        title: "Fundamentals of Agriculture",
        platform: "NPTEL",
        duration: "8 weeks",
        level: "Beginner"
    },
    {
        title: "Soil Science & Nutrition",
        platform: "Coursera",
        duration: "6 weeks",
        level: "Intermediate"
    },
    {
        title: "Crop Management Techniques",
        platform: "NPTEL",
        duration: "10 weeks",
        level: "Intermediate"
    },
    {
        title: "Sustainable Farming Practices",
        platform: "edX",
        duration: "8 weeks",
        level: "Advanced"
    },
    {
        title: "Agricultural Entrepreneurship",
        platform: "Coursera",
        duration: "5 weeks",
        level: "Intermediate"
    },
    {
        title: "Farm to Table Technology",
        platform: "Udemy",
        duration: "4 weeks",
        level: "Beginner"
    }
];

const mentors = [
    {
        name: "Dr. Rajesh Kumar",
        specialization: "Crop Science",
        experience: "15 years",
        rating: 4.8
    },
    {
        name: "Ms. Priya Singh",
        specialization: "Farm Management",
        experience: "12 years",
        rating: 4.9
    },
    {
        name: "Prof. Amit Verma",
        specialization: "Soil Science",
        experience: "18 years",
        rating: 4.7
    },
    {
        name: "Ms. Neha Gupta",
        specialization: "Agricultural Tech",
        experience: "8 years",
        rating: 4.6
    },
    {
        name: "Dr. Vikram Sharma",
        specialization: "Farm Economics",
        experience: "20 years",
        rating: 4.9
    },
    {
        name: "Ms. Shreya Patel",
        specialization: "Organic Farming",
        experience: "10 years",
        rating: 4.8
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadInternships();
    loadCourses();
    loadMentors();
});

// Load Internships
function loadInternships() {
    const grid = document.getElementById('internshipGrid');
    grid.innerHTML = internships.map(job => `
        <div class="card">
            <h3>${job.title}</h3>
            <p><strong>${job.company}</strong></p>
            <p>${job.description}</p>
            <span class="type">${job.type.charAt(0).toUpperCase() + job.type.slice(1)}</span>
            <div style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
                <p>📅 ${job.duration}</p>
                <p>💰 ${job.stipend}</p>
            </div>
            <button class="modal-btn" style="width: 100%; margin-top: 1rem;" onclick="applyInternship('${job.title}')">Apply Now</button>
        </div>
    `).join('');
}

// Load Courses
function loadCourses() {
    const grid = document.getElementById('courseGrid');
    grid.innerHTML = courses.map(course => `
        <div class="card">
            <h3>${course.title}</h3>
            <p><strong>${course.platform}</strong></p>
            <div style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
                <p>📚 Level: ${course.level}</p>
                <p>⏱️ Duration: ${course.duration}</p>
            </div>
            <button class="modal-btn" style="width: 100%; margin-top: 1rem;" onclick="alert('Enrolling in ' + '${course.title}')">Enroll Now</button>
        </div>
    `).join('');
}

// Load Mentors
function loadMentors() {
    const grid = document.getElementById('mentorGrid');
    grid.innerHTML = mentors.map(mentor => `
        <div class="card">
            <h3>${mentor.name}</h3>
            <p><strong>${mentor.specialization}</strong></p>
            <div style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
                <p>👔 Experience: ${mentor.experience}</p>
                <p>⭐ Rating: ${mentor.rating}/5</p>
            </div>
            <button class="modal-btn" style="width: 100%; margin-top: 1rem;" onclick="connectMentor('${mentor.name}')">Connect Now</button>
        </div>
    `).join('');
}

// Search and Filter
document.getElementById('searchInput')?.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filterType = document.getElementById('filterType').value;
    
    const filtered = internships.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) || 
                             job.company.toLowerCase().includes(searchTerm);
        const matchesType = !filterType || job.type === filterType;
        return matchesSearch && matchesType;
    });
    
    const grid = document.getElementById('internshipGrid');
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No internships found. Try different search terms.</p>';
    } else {
        grid.innerHTML = filtered.map(job => `
            <div class="card">
                <h3>${job.title}</h3>
                <p><strong>${job.company}</strong></p>
                <p>${job.description}</p>
                <span class="type">${job.type.charAt(0).toUpperCase() + job.type.slice(1)}</span>
                <div style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
                    <p>📅 ${job.duration}</p>
                    <p>💰 ${job.stipend}</p>
                </div>
                <button class="modal-btn" style="width: 100%; margin-top: 1rem;" onclick="applyInternship('${job.title}')">Apply Now</button>
            </div>
        `).join('');
    }
});

document.getElementById('filterType')?.addEventListener('change', function() {
    document.getElementById('searchInput').dispatchEvent(new Event('input'));
});

// Modal Functions
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function showModal(type) {
    const modal = document.getElementById('genericModal');
    const body = document.getElementById('modalBody');
    
    switch(type) {
        case 'resume-builder':
            body.innerHTML = `
                <h2>📄 Resume Builder</h2>
                <form>
                    <input type="text" placeholder="Full Name" required>
                    <input type="email" placeholder="Email" required>
                    <input type="tel" placeholder="Phone" required>
                    <textarea placeholder="About You"></textarea>
                    <textarea placeholder="Education"></textarea>
                    <textarea placeholder="Experience"></textarea>
                    <textarea placeholder="Skills"></textarea>
                    <button type="submit" class="modal-btn">Generate Resume</button>
                </form>
            `;
            break;
        case 'project-showcase':
            body.innerHTML = `
                <h2>🎨 Project Showcase</h2>
                <form>
                    <input type="text" placeholder="Project Title" required>
                    <textarea placeholder="Project Description"></textarea>
                    <input type="text" placeholder="Technologies Used">
                    <input type="url" placeholder="GitHub/Demo Link">
                    <button type="submit" class="modal-btn">Upload Project</button>
                </form>
            `;
            break;
        case 'skill-analyzer':
            body.innerHTML = `
                <h2>📊 Skill Gap Analyzer</h2>
                <form>
                    <label>Your Skills (comma-separated):</label>
                    <input type="text" placeholder="e.g., Python, Data Analysis, Farming">
                    <label>Target Industry Role:</label>
                    <select>
                        <option>Agricultural Scientist</option>
                        <option>Farm Manager</option>
                        <option>AgriTech Developer</option>
                        <option>Agricultural Economist</option>
                    </select>
                    <button type="submit" class="modal-btn">Analyze Skills</button>
                </form>
            `;
            break;
        case 'internship-tracker':
            body.innerHTML = `
                <h2>📈 Internship Tracker</h2>
                <div style="max-height: 400px; overflow-y: auto;">
                    <p><strong>Applied Internships:</strong></p>
                    <ul style="list-style: none; padding: 0;">
                        <li>✅ Agricultural Research Intern - Accepted</li>
                        <li>⏳ Farm Management Intern - Pending</li>
                        <li>❌ Crop Science Internship - Not Selected</li>
                    </ul>
                </div>
                <button class="modal-btn" style="width: 100%; margin-top: 1rem;">View Full History</button>
            `;
            break;
        case 'certificate-verify':
            body.innerHTML = `
                <h2>✅ Certificate Verification</h2>
                <form>
                    <label>Select Certificate:</label>
                    <input type="file" accept=".pdf,.jpg,.png" required>
                    <label>Certificate Name:</label>
                    <input type="text" placeholder="e.g., Advanced Crop Management">
                    <label>Issuing Organization:</label>
                    <input type="text" placeholder="e.g., NPTEL">
                    <label>Date Issued:</label>
                    <input type="date" required>
                    <button type="submit" class="modal-btn">Upload Certificate</button>
                </form>
            `;
            break;
        case 'request-mentor':
            body.innerHTML = `
                <h2>👥 Request a Mentor</h2>
                <form>
                    <label>Select Specialization:</label>
                    <select>
                        <option>Crop Science</option>
                        <option>Farm Management</option>
                        <option>Soil Science</option>
                        <option>Agricultural Tech</option>
                        <option>Farm Economics</option>
                    </select>
                    <label>Your Background:</label>
                    <textarea placeholder="Tell us about your agriculture background..."></textarea>
                    <label>Goals:</label>
                    <textarea placeholder="What are your goals?"></textarea>
                    <button type="submit" class="modal-btn">Find Mentor</button>
                </form>
            `;
            break;
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('genericModal').style.display = 'none';
}

// Function handlers
function applyInternship(title) {
    if (confirm(`Apply for ${title}?\n\nPlease make sure you're logged in to proceed.`)) {
        alert(`Application submitted for ${title}! We'll contact you soon.`);
    }
}

function connectMentor(name) {
    if (confirm(`Connect with ${name}?\n\nA request will be sent to the mentor.`)) {
        alert(`Connection request sent to ${name}! They'll respond within 24 hours.`);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const genericModal = document.getElementById('genericModal');
    
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === genericModal) {
        genericModal.style.display = 'none';
    }
}
