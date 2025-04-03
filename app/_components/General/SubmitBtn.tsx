interface SubmitBtnProps {
  isEdit?: boolean;
  isLoading?: boolean;
}

function SubmitBtn({ isEdit = false, isLoading = false }: SubmitBtnProps) {
  return (
    <button
      disabled={isLoading}
      type="submit"
      className={`cursor-pointer ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      } w-full bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600`}
    >
      {isLoading
        ? "Submitting..."
        : isEdit
        ? "Update Product"
        : "Add New Product"}
    </button>
  );
}

export default SubmitBtn;
