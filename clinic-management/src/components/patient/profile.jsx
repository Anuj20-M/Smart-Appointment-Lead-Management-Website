import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import AuthContext from "../../context-API/AuthContext";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import {Button} from "../../components/ui/button";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [pwdOpen, setPwdOpen] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  // Reset form when dialog closes
  useEffect(() => {
    if (!pwdOpen) {
      reset();
    }
  }, [pwdOpen, reset]);

  const initials =
    `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase();
  const onPwdSubmit = (data) => {
    // mock handling – just show a toast and close dialog
    toast.success("Password updated (mock)", { position: "top-center" });
    setPwdOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8">
      {/* Avatar & Basic Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div
          className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-primary text-white rounded-full font-semibold text-2xl"
          aria-label="User avatar"
        >
          {initials || "?"}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-slate-600 mt-1">{user.email}</p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DetailItem label="Phone" value={user.phone} />
        <DetailItem label="Date of Birth" value={user.dob} />
        <DetailItem label="Gender" value={user.gender} />
        <DetailItem label="Blood Group" value={user.bloodGroup} />
        <DetailItem label="Emergency Contact" value={user.emergencyContact} />
        <DetailItem label="Address" value={user.address} />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <Button
          variant="default"
          size="lg"
          onClick={() => navigate("/completeProfile")}
        >
          Edit Profile
        </Button>
        <Dialog open={pwdOpen} onOpenChange={setPwdOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg">
              Change Password
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-106.25">
            <DialogHeader>
              <DialogTitle>Change Password</DialogTitle>
              <DialogDescription>
                Enter your current password and the new password you would like
                to set.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onPwdSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Current Password
                </label>
                <Input
                  type="password"
                  {...register("currentPassword", {
                    required: "Current password is required",
                  })}
                />
                {errors.currentPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.currentPassword.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  New Password
                </label>
                <Input
                  type="password"
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors.newPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: value => value === getValues('newPassword') || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                )}
              </div>
              <DialogFooter className="flex justify-end space-x-2">
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" variant="default">
                  Save
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="bg-white rounded-lg shadow p-4">
    <p className="text-sm text-slate-500">{label}</p>
    <p className="mt-1 text-lg font-medium text-slate-800">{value ?? "-"}</p>
  </div>
);

export default Profile;
