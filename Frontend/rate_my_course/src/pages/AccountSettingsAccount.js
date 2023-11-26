// // AccountSettingsAccount.js

// import React, { useState } from 'react';
// import '../styles/AccountSettings.css';

// const AccountSettingsAccount = () => {
//   // Sample user details
//   const [userInfo, setUserInfo] = useState({
//     name: 'John',
//     lastName: 'Doe',
//     yearOfStudy: '3rd',
//     university: 'Example University',
//     email: 'john.doe@example.com',
//   });

//   // State to track the editable status of each field
//   const [editableFields, setEditableFields] = useState({
//     name: false,
//     lastName: false,
//     yearOfStudy: false,
//     university: false,
//     email: false,
//   });

//   // Function to handle the "Edit" button click
//   const handleEditClick = (field) => {
//     setEditableFields({ ...editableFields, [field]: true });
//   };

//   // Function to handle the "Cancel" button click
//   const handleCancelClick = (field) => {
//     setEditableFields({ ...editableFields, [field]: false });
//   };

//   // Function to handle the "Submit" button click
//   const handleSubmitClick = (field) => {
//     setEditableFields({ ...editableFields, [field]: false });
//     // You may want to implement logic to save changes to the backend here
//   };

//   return (
//     <div className="account-settings-main">
//       {/* User Details */}
//       <div className="user-details">
//         {Object.keys(userInfo).map((field) => (
//           <div key={field} className="detail-row">
//             <span className="detail-label">{field}:</span>
//             <div className="detail-value">
//               {editableFields[field] ? (
//                 <input
//                   type="text"
//                   value={userInfo[field]}
//                   onChange={(e) =>
//                     setUserInfo({ ...userInfo, [field]: e.target.value })
//                   }
//                 />
//               ) : (
//                 <span>{userInfo[field]}</span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Edit Buttons */}
//       <div className="edit-buttons">
//         {Object.keys(userInfo).map((field) => (
//           <div key={field} className="edit-buttons-row">
//             {!editableFields[field] && (
//               <button onClick={() => handleEditClick(field)}>Edit</button>
//             )}
//             {editableFields[field] && (
//               <div className="edit-buttons">
//                 <button onClick={() => handleCancelClick(field)}>Cancel</button>
//                 <button onClick={() => handleSubmitClick(field)}>Submit</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AccountSettingsAccount;




/// ANother version

// import React from 'react';
// import '../styles/AccountSettings.css';

// class AccountSettingsAccount extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isEditing: {
//         name: false,
//         lastName: false,
//         yearOfStudy: false,
//         university: false,
//         email: false,
//       },
//       originalFields: {
//         name: '',
//         lastName: '',
//         yearOfStudy: '',
//         university: '',
//         email: '',
//       },
//       fields: {
//         name: '',
//         lastName: '',
//         yearOfStudy: '',
//         university: '',
//         email: '',
//       },
//     };
//   }

//   handleEditClick = (field) => {
//     this.setState((prevState) => ({
//       isEditing: { ...prevState.isEditing, [field]: true },
//       originalFields: { ...prevState.fields },
//     }));
//   };

//   handleSaveClick = (field) => {
//     this.setState((prevState) => ({
//       isEditing: { ...prevState.isEditing, [field]: false },
//       originalFields: { ...prevState.fields },
//     }));
//   };

//   handleCancelClick = (field) => {
//     this.setState((prevState) => ({
//       isEditing: { ...prevState.isEditing, [field]: false },
//       fields: { ...prevState.originalFields },
//     }));
//   };

//   handleChange = (field, event) => {
//     this.setState((prevState) => ({
//       fields: { ...prevState.fields, [field]: event.target.value },
//     }));
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="labelsContainer">
//           <div className={`inputRow ${this.state.isEditing.name ? 'editing' : ''}`}>
//             <label className="label">Name:</label>
//             <div className="buttonGroup">
//               {this.state.isEditing.name ? (
//                 <>
//                   <input
//                     type="text"
//                     value={this.state.fields.name}
//                     onChange={(e) => this.handleChange('name', e)}
//                     className="textInput"
//                   />
//                   <button onClick={() => this.handleSaveClick('name')}>Save</button>
//                   <button onClick={() => this.handleCancelClick('name')} className="cancelButton">Cancel</button>
//                 </>
//               ) : (
//                 <>
//                   <div>{this.state.fields.name}</div>
//                   <button onClick={() => this.handleEditClick('name')}>Edit</button>
//                 </>
//               )}
//             </div>
//           </div>

//           <div className={`inputRow ${this.state.isEditing.lastName ? 'editing' : ''}`}>
//             <label className="label">Last Name:</label>
//             <div className="buttonGroup">
//               {this.state.isEditing.lastName ? (
//                 <>
//                   <input
//                     type="text"
//                     value={this.state.fields.lastName}
//                     onChange={(e) => this.handleChange('lastName', e)}
//                     className="textInput"
//                   />
//                   <button onClick={() => this.handleSaveClick('lastName')}>Save</button>
//                   <button onClick={() => this.handleCancelClick('lastName')} className="cancelButton">Cancel</button>
//                 </>
//               ) : (
//                 <>
//                   <div>{this.state.fields.lastName}</div>
//                   <button onClick={() => this.handleEditClick('lastName')}>Edit</button>
//                 </>
//               )}
//             </div>
//           </div>

//           <div className={`inputRow ${this.state.isEditing.yearOfStudy ? 'editing' : ''}`}>
//             <label className="label">Year of Study:</label>
//             <div className="buttonGroup">
//               {this.state.isEditing.yearOfStudy ? (
//                 <>
//                   <input
//                     type="text"
//                     value={this.state.fields.yearOfStudy}
//                     onChange={(e) => this.handleChange('yearOfStudy', e)}
//                     className="textInput"
//                   />
//                   <button onClick={() => this.handleSaveClick('yearOfStudy')}>Save</button>
//                   <button onClick={() => this.handleCancelClick('yearOfStudy')} className="cancelButton">Cancel</button>
//                 </>
//               ) : (
//                 <>
//                   <div>{this.state.fields.yearOfStudy}</div>
//                   <button onClick={() => this.handleEditClick('yearOfStudy')}>Edit</button>
//                 </>
//               )}
//             </div>
//           </div>

//           <div className={`inputRow ${this.state.isEditing.university ? 'editing' : ''}`}>
//             <label className="label">University:</label>
//             <div className="buttonGroup">
//               {this.state.isEditing.university ? (
//                 <>
//                   <input
//                     type="text"
//                     value={this.state.fields.university}
//                     onChange={(e) => this.handleChange('university', e)}
//                     className="textInput"
//                   />
//                   <button onClick={() => this.handleSaveClick('university')}>Save</button>
//                   <button onClick={() => this.handleCancelClick('university')} className="cancelButton">Cancel</button>
//                 </>
//               ) : (
//                 <>
//                   <div>{this.state.fields.university}</div>
//                   <button onClick={() => this.handleEditClick('university')}>Edit</button>
//                 </>
//               )}
//             </div>
//           </div>

//           <div className={`inputRow ${this.state.isEditing.email ? 'editing' : ''}`}>
//             <label className="label">Email:</label>
//             <div className="buttonGroup">
//               {this.state.isEditing.email ? (
//                 <>
//                   <input
//                     type="text"
//                     value={this.state.fields.email}
//                     onChange={(e) => this.handleChange('email', e)}
//                     className="textInput"
//                   />
//                   <button onClick={() => this.handleSaveClick('email')}>Save</button>
//                   <button onClick={() => this.handleCancelClick('email')} className="cancelButton">Cancel</button>
//                 </>
//               ) : (
//                 <>
//                   <div>{this.state.fields.email}</div>
//                   <button onClick={() => this.handleEditClick('email')}>Edit</button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AccountSettingsAccount;







import React, { useState } from "react";
import '../styles/AccountSettingsAccount.css';

const AccountSettingsAccount = () => {
    const initialData = {
        firstName: "John",
        lastName: "Doe",
        yearOfStudy: "3",
        university: "University of Calgary",
        email: "john_doe@ucalgary.ca",
    };

    const [data, setData] = useState(initialData);
    const [editMode, setEditMode] = useState({
        firstName: false,
        lastName: false,
        yearOfStudy: false,
        university: false,
        email: false,
    });

    const [tempData, setTempData] = useState({}); // State to store temporary changes

    const handleEditClick = (field) => {
        setTempData((prevTempData) => ({
            ...prevTempData,
            [field]: data[field],
        }));

        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [field]: true,
        }));
    };

    const handleSaveClick = (field) => {
        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [field]: false,
        }));
    };

    const handleCancelClick = (field) => {
        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [field]: false,
        }));
        // Reset the input field to its original value
        
        setData((prevData) => ({
            ...prevData,
            [field]: tempData[field],
        }));
    };

    const handleInputChange = (field, value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <div className="mainContainer--account">
            <div class="titleContainer">Account Details</div>
            
            <div className="entireDiv">
                <div className="labelContainer">
                    <label>Name:</label>
                    <label>Last Name:</label>
                    <label>University:</label>
                    <label>Year of Study:</label>
                    <label>Email:</label>
                </div>
                <div className="textFieldContainer" id="textFieldContainer--accountSettingsAccount">
                    {Object.keys(data).map((field) => (
                        <div key={field} className="inputContainer">
                            <input
                                className="inputBox" id="inputBox--accountSettingsAccount"
                                value={data[field]}
                                readOnly={!editMode[field]}
                                onChange={(e) => handleInputChange(field, e.target.value)}
                            />

                            <div className="editButtonsContainer">

                                {editMode[field] ? (
                                    <div className="editButtons">
                                        <button id="saveButton" onClick={() => handleSaveClick(field)}>Save</button>
                                        <button id="cancelButton" onClick={() => handleCancelClick(field)}>Cancel</button>
                                    </div>
                                ) : (
                                    <button id="editButton" onClick={() => handleEditClick(field)}>Edit</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default AccountSettingsAccount;


