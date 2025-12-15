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
        message: `Failed to delete item with id ${id}`,
      };
    }

    return {
      open: true,
      bool: true,
      message: "Item deleted successfully",
    };
  } catch (error) {
    return {
      open: true,
      bool: false,
      message: `Error deleting item with id ${id}`,
    };
  }
}
  