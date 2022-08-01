// formats date in DD.MonthName.YYYY format
export const formatDate = ( date ) => {
    const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }

    return new Intl.DateTimeFormat('en-GB', options).format( date ).split(' ').join('.');
}