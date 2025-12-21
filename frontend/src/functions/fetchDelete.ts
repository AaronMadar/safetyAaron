export async function fetchDelete(
  id: number
): Promise<{ open: boolean; bool: boolean; message: string }> {
  try {
    const response = await fetch(`http://localhost:3000/safety-event/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      return {
        open: true,
        bool: false,
        message: `נכשלה מחיקת הפריט עם המזהה  ${id}`,
      };
    }

    return {
      open: true,
      bool: true,
      message: "הפריט נמחק בהצלחה",
    };
  } catch (error) {
    return {
      open: true,
      bool: false,
      message: `שגיאה במחיקת הפריט עם המזהה ${id}`,
    };  
  }
}
