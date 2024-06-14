
import React from 'react';
import './AppliedJobs.css';

const jobList = [
  {
    id: 1,
    logo: 'software.svg',
    title: 'Software Engineering',
    company: 'Vista Technologies',
    rating: 56,
    experience: '1-5 Years',
    salary: ' 5 - 8 Lakh',
    location: 'Chennai/Kerala/Bangalore',
    dateApplied: 'Feb 28, 2024 02:35 PM',
    status: 'Submitted',
    img: "/side1.svg",
    subStatus: 'Interview'
  },
  {
    id: 2,
    logo: 'intergrated.svg',
    title: 'Integrated Assessment Services',
    company: 'InVisionApp Inc',
    rating: 78,
    experience: '1-5 Years',
    salary: ' 5 - 8 Lakh',
    location: 'Chennai/Kerala/Bangalore',
    dateApplied: 'Feb 28, 2024 02:35 PM',
    status: 'Submitted',
    img: "/side2.svg",
    subStatus: 'Expired'
  },
  {
    id: 3,
    logo: 'softwareE.svg',
    title: 'Software Engineering',
    company: 'Vista Technologies',
    rating: 56,
    experience: '1-5 Years',
    salary: ' 5 - 8 Lakh',
    location: 'Chennai/Kerala/Bangalore',
    dateApplied: 'Feb 28, 2024 02:35 PM',
    status: 'Expired'
  },
  {
    id: 4,
    logo: 'softInt3.svg',
    title: 'Integrated Assessment Services',
    company: 'InVisionApp Inc',
    rating: 78,
    experience: '1-5 Years',
    salary: ' 5 - 8 Lakh',
    location: 'Chennai/Kerala/Bangalore',
    dateApplied: 'Feb 28, 2024 02:35 PM',
    status: 'Interview',
    img: "/side1.svg",
    subStatus: 'HR Round'
  },
  {
    id: 5,
    logo: 'software.svg',
    title: 'Software Engineering',
    company: 'Vista Technologies',
    rating: 56,
    experience: '1-5 Years',
    salary: ' 5 - 8 Lakh',
    location: 'Chennai/Kerala/Bangalore',
    dateApplied: 'Feb 28, 2024 02:35 PM',
    status: 'Expired'
  },
  {
    id: 6,
    logo: 'softInt3.svg',
    title: 'Integrated Assessment Services',
    company: 'InVisionApp Inc',
    rating: 78,
    experience: '1-5 Years',
    salary: ' 5 - 8 Lakh',
    location: 'Chennai/Kerala/Bangalore',
    dateApplied: 'Feb 28, 2024 02:35 PM',
    status: 'Applied on'
  },
  {
    id: 7,
    logo: 'softInt3.svg',
    title: 'Software Engineering',
    company: 'Vista Technologies',
    rating: 56,
    experience: '1-5 Years',
    salary: ' 5 - 8 Lakh',
    location: 'Chennai/Kerala/Bangalore',
    dateApplied: 'Feb 28, 2024 02:35 PM',
    status: 'Expired'
  },
  {
    id: 8,
    logo: 'intergrated.svg',
    title: 'Integrated Assessment Services',
    company: 'InVisionApp Inc',
    rating: 78,
    experience: '1-5 Years',
    salary: ' 5 - 8 Lakh',
    location: 'Chennai/Kerala/Bangalore',
    dateApplied: 'Feb 28, 2024 02:35 PM',
    status: 'Applied on'
  }
];

const AppliedJobs = () => {
  return (
    <div className="phase1">
      <header className="phase1-header">
      <div class="menu">☰</div>
        <div className="logo">
          <img src="/logor.svg" alt="Hire Walks Logo" />
          Hire Walks
        </div>
        
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Search Jobs</a>
          <a href="#" className="my-account">My Account</a>
        </nav>
        <div className="header-right">
          <div className="notification">
            <img src="/notification.svg" alt="notification" />
          </div>
          <div className="user-info">
            <img src="/mark.svg" alt="Mark Wood" />
            <div className="user-details">
              <span>Mark Wood</span>
              <div className="edit-profile">
                <span>Edit Profile</span>
                <img src="/down.svg" alt="Down Arrow" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="sidebar">
          <div class="sidebar-section">
            <h3>MY ACCOUNT</h3>
            <ul>
              <li>
                <a href="#">
                  <img src="/profile.svg" alt="proflie" />
                  Profile Overview
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/myprofile.svg" alt="myprofile" />
                  My Profile
                </a>
              </li>
            </ul>
          </div>

          <div class="sidebar-section">
            <h3>JOBS</h3>
            <ul>
              <li class="active">
                <a href="#">
                  <img src="/jobs.svg" alt="jobs" />
                  Applied Jobs
                  <span class="dot-counter">9</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/interview.svg" alt="interview" />
                  Interview Schedule
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/saved.svg" alt="saved" />
                  Saved Jobs
                </a>
              </li>
            </ul>
          </div>

          <div class="sidebar-section">
            <h3>OTHERS</h3>
            <ul>
              <li>
                <a href="#">
                  <img src="/settings.svg" alt="settings" />
                  Settings
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/help.svg" alt="help" />
                  Help
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/logout.svg" alt="logout" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div className="phase2">
          <header className="applied-jobs-header">
            <h1>Applied Jobs <span className='job-count'>(276)</span></h1>
          </header>
          <div className="job-table">
            <div className="table-header">
              <div>JOBS INFO</div>
              <div>JOB OVERVIEW</div>
              <div>DATE APPLIED & STATUS</div>
              <div>ACTION</div>
            </div>
            {jobList.map(job => (
              <div key={job.id} className="job-row">
                <div className="job-info">
                  <img src={job.logo} alt={job.company} className="company-logo" />
                  <div>
                    <h3>{job.title}</h3>
                    <p className='company-rating'>
                      <span className="company-name">{job.company} |  </span>
                      <span className="rating">★ {job.rating}</span>
                    </p>
                  </div>
                </div>
                <div className="job-overview">
                  <p>
                    <img src="/experience.svg" alt="" /> {job.experience}
                    <span>|</span>
                    <img src="/salary.svg" alt="" /> {job.salary}
                  </p>
                  <p> <img src="/location.svg" alt="" /> {job.location}</p>
                </div>
                <div className="date-status">
                  <p>{job.dateApplied}</p>
                  <span className={`status ${job.status.toLowerCase()}`}>{job.status}</span>
                  {job.subStatus && <span className={`sub-status ${job.subStatus.toLowerCase()}`}>{job.subStatus}</span>}
                </div>
                <div className="action">
                  <img src="/eye.svg" alt="eye" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="phase3">
        <button><img src="/first.svg" alt="first" /></button>
        <button><img src="/prev.svg" alt="prev" /></button>
        <button className='active'>1</button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>10</button>
        <button><img src="/next.svg" alt="next" /></button>
        <button><img src="/last.svg" alt="last" /></button>
      </div>

      <footer class="phase4">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="/logow.svg" alt="Company Logo" />
            <p>
              <img src="/call.svg" alt="Call" />
              +91 78979 33430
            </p>
            <p>
              <img src="/email.svg" alt="email" />
              support@hiresathi.com
            </p>
            <p>
              Join with us to get Faster, Easier, Promising jobs and <br /> Talents.
              Explore the millions of opportunities.
              Search <br /> Jobs Post Jobs For Free
            </p>

          </div>
          <div class="footer-column">
            <h3>Information</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Product Pricing</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Jobs by location</h3>
            <ul>
              <li><a href="#">Jobs in Bengaluru</a></li>
              <li><a href="#">Jobs in Chennai</a></li>
              <li><a href="#">Jobs in Coimbatore</a></li>
              <li><a href="#">Jobs in Kochi</a></li>
              <li><a href="#">Jobs in Pune</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Jobs by Industry</h3>
            <ul>
              <li><a href="#">Education / Training</a></li>
              <li><a href="#">Mechanical & Automobile</a></li>
              <li><a href="#">Tourism & Travel</a></li>
              <li><a href="#">Construction & Real Estate</a></li>
              <li><a href="#">Financial services</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Jobs by Companies</h3>
            <ul>
              <li><a href="#">Electrical / Electronics / Communication</a></li>
              <li><a href="#">Transport</a></li>
              <li><a href="#">Retail & e-Commerce</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Communications</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 - Hiresathi, All rights Reserved</p>
          <div class="social-icons">
            <img src="/facebook.svg" alt="facebook" />
            <img src="/youtube.svg" alt="youtube" />
            <img src="/instagram.svg" alt="instagram" />
            <img src="/twitter.svg" alt="twitter" />
          </div>
        </div>
      </footer>
    </div>

  );
};

export default AppliedJobs;
