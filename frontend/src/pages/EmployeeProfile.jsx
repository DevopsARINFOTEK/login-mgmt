import EmployeeLayout from "../components/EmployeeLayout";

const EmployeeProfile = () => {
  return (
    <EmployeeLayout>

      <h2>My Profile</h2>

      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/150"
          alt=""
        />

        <h3>Employee User</h3>

        <p>Fullstack Developer</p>

        <hr />

        <p>Email: praveen@test.com</p>

        <p>Department: IT</p>

      </div>

    </EmployeeLayout>
  );
};

export default EmployeeProfile;