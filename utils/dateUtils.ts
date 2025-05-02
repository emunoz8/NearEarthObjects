
export function isValidDate(dateStr: string): boolean {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateStr)) return false;
  
    const date = new Date(dateStr);
    return !isNaN(date.getTime()) && dateStr === date.toISOString().split('T')[0];
  }
  
  export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
  }
  
  export function getDateFromString(dateStr: string): Date {
    return new Date(dateStr);
  }
  