import React from 'react';
import human from "/img/Human.png";

// --- CSS-in-JS Styles ---
const styles = {
    // Styling for the overall container (simulating the 'Outlet' area)
    outletContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh', // Take up most of the viewport height
        padding: '20px',
        // backgroundColor: '#173f67ff',
    },
    // Styling for the main profile card
    profileCard: {
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        padding: '30px',
        textAlign: 'center',
        borderTop: '8px solid #6752c6ff', // A nice academic purple color
        transition: 'transform 0.3s ease-in-out',
    },
    // Hover effect for the card (optional but nice)
    profileCardHover: {
        transform: 'translateY(-5px)',
    },
    // Styling for the student photo
    photo: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        objectFit: 'cover',
        margin: '0 auto 20px auto',
        border: '4px solid #5900f4ff',
    },
    // Styling for the header (Name)
    name: {
        fontSize: '1.8rem',
        color: '#333',
        marginBottom: '5px',
        fontWeight: '700',
    },
    // Styling for secondary info (ID, Major)
    infoText: {
        fontSize: '1rem',
        color: '#666',
        margin: '5px 0',
        fontWeight: '500',
    },
    // Styling for the self-introduction paragraph
    introParagraph: {
        marginTop: '20px',
        fontSize: '1.1rem',
        color: '#444',
        lineHeight: '1.6',
        padding: '10px 0',
        borderTop: '1px solid #eee',
    },
    
    highlight: {
        color: '#6a0dad',
        fontWeight: 'bold',
    },
};

const StudentProfile = () => {
    
    const [isHovered, setIsHovered] = React.useState(false);

    
    const student = {
        name: "นาย นัธทวัฒน์ ปิ่นปั่น",
        studentId: "67117324",
        year: "ชั้นปีที่ 2",
        major: "สาขา วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์",
        faculty: "เทคโนโลยีสารสนเทศ",
        university: "มหาวิทยาลัยศรีปทุม",
        photoUrl: "Human.png",
        bio: "sawadeekubpomboeing",
    };

    const cardStyle = isHovered 
        ? { ...styles.profileCard, ...styles.profileCardHover } 
        : styles.profileCard;

    return (
        <div style={styles.outletContainer}>
            <div 
                style={cardStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* 1. Student Photo */}
                <img 
                    src={human} 
                    alt="Student Profile" 
                    style={styles.photo} 
                />

                {/* 2. Name */}
                <h1 style={styles.name}>{student.name}</h1>

                {/* 3. Student ID */}
                <p style={styles.infoText}>
                    รหัสนักศึกษา: <span style={styles.highlight}>{student.studentId}</span>
                </p>

                {/* 4. Academic Info */}
                <p style={styles.infoText}>
                    {student.year} / {student.major}
                </p>
                <p style={styles.infoText}>
                    {student.faculty} / {student.university}
                </p>

                {/* 5. Self-Introduction */}
                <p style={styles.introParagraph}>
                    {student.bio}
                </p>
            </div>
        </div>
    );
};

export default StudentProfile;