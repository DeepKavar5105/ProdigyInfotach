export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US').format(new Date(date));
  };
  
  export const truncateText = (text, length) => {
    if (text.length > length) {
      return text.slice(0, length) + '...';
    }
    return text;
  };
  
  export const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 15);
  };
  