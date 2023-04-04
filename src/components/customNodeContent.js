import React from "react";

const styles = {
  nodeContainer: {
    minHeight: "150px",
    backgroundColor: "#F8F8F8",
    color: "#E9E9E9",
    display: "flex",
    justifyContent: "center",
    borderRadius: "1rem",
  },
  nodeDetails: {
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nodeContent: {
    display: "flex",
    alignItems: "center",
  },
  nodeTeam: {
    width: "100%",
    textAlign: "center",
  },
  nodeTeamName: {
    marginBottom: "0.5rem",
    color: "#151618",
    fontSize: "1rem",
  },
  nodeTeamMemberImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "0.2rem",
  },
  nodeImg: {
    borderRadius: "100",
    width: "90px",
    height: "90px",
  },
  nodeInfo: {
    marginLeft: "1.5rem",
    color: "#151618",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  nodeName: {
    paddingBottom: "0.3rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  nodeRole: {
    paddingBottom: "0.5rem",
    fontSize: "1rem",
  },
  nodeDepartment: {
    padding: "0.5rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffcb77",
    borderRadius: "1rem",
    color: "#151618",
  },
  icon: {
    marginRight: "0.5rem",
  },
};

const CustomNodeContent = (props) => {
  return (
    <>
      <div style={styles.nodeContainer}>
        <div style={styles.nodeDetails}>
          <div style={styles.nodeContent}>
            <img
              style={styles.nodeImg}
              src={props.data.imageUrl}
              alt="Profile"
            />
            <div style={styles.nodeInfo}>
              <div style={styles.nodeName}>{props.data.Name}</div>
              <div style={styles.nodeRole}>{props.data.PositionCode}</div>
              <div style={styles.nodeTeamName}>{props.data.Location}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNodeContent;
