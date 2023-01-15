const formatDate = (myDate) => {
    const d = new Date(myDate);
    return d.toLocaleDateString();
  };
  export default formatDate;
  