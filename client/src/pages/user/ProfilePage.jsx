import { ProfileEditForm } from "@/components/shared/ProfileEditForm";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export const ProfilePage = () => {
    const [toggleEditForm, setToggleEditForm] = useState(false);

    return (
        <div className="">
            <h1>profile page</h1>
            <button className="p-5 bg-slate-700" onClick={(e) => setToggleEditForm((prev) => !prev)}>
                Edit Profile
            </button>
            <Button variant="secondary">Change password </Button>
            <div className="w-8/12">{toggleEditForm && <ProfileEditForm setToggleEditForm={setToggleEditForm} />}</div>
        </div>
    );
};
