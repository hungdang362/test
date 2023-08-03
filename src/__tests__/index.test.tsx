import { render, fireEvent } from "@testing-library/react";
import { CustomModal } from "../components/common";

describe("CustomModal", () => {
  const title = "Notification";
  const deleteConfirm = "Are you sure want to delete this item?";
  const cancelText = "Cancel";
  const confirmText = "Confirm";

  test("renders modal with correct title", () => {
    const { getByText } = render(
      <CustomModal
        title={title}
        children={deleteConfirm}
        isOpen={true}
        onClose={() => { }}
        onConfirm={() => { }}
      />
    );
    expect(getByText(title)).toBeInTheDocument();
  });

  test("renders modal with correct cancelText", () => {
    const { getByText } = render(
      <CustomModal
        title={title}
        cancelText={cancelText}
        children={deleteConfirm}
        isOpen={true}
        onClose={() => { }}
        onConfirm={() => { }}
      />
    );
    expect(getByText(cancelText)).toBeInTheDocument();
  });

  test("renders modal with correct confirmText", () => {
    const { getByText } = render(
      <CustomModal
        title={title}
        confirmText={confirmText}
        children={deleteConfirm}
        isOpen={true}
        onClose={() => { }}
        onConfirm={() => { }}
      />
    );
    expect(getByText(confirmText)).toBeInTheDocument();
  });

  test("calls onCancel when modal is closed", () => {
    const onConfirmMock = jest.fn();
    const onCancelMock = jest.fn();

    const { getByRole } = render(
      <CustomModal
        title={title}
        children={deleteConfirm}
        isOpen={true}
        onClose={onCancelMock}
        onConfirm={onConfirmMock}
      />
    );
    const closeButton = getByRole("button", { name: /Cancel/i });
    fireEvent.click(closeButton);
    expect(onCancelMock).toHaveBeenCalledTimes(1);
    expect(onConfirmMock).not.toHaveBeenCalled();
  });

  test("calls onConfirm when confirm button is clicked", () => {
    const onConfirmMock = jest.fn();
    const onCancelMock = jest.fn();
    const { getByRole } = render(
      <CustomModal
        title={title}
        children={deleteConfirm}
        isOpen={true}
        onClose={onCancelMock}
        onConfirm={onConfirmMock}
      />
    );
    const confirmButton = getByRole("button", { name: /Confirm/i });
    fireEvent.click(confirmButton);
    expect(onConfirmMock).toHaveBeenCalledTimes(1);
    expect(onCancelMock).not.toHaveBeenCalled();
  });
});
