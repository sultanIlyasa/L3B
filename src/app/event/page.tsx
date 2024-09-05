"use client";
import React from "react";
import { CategoryInfo } from "@/components/CategoryInfo";
import { CampaignCharity } from "@/components/CampaignCharity";
import { RaceRulesRegulationComponent } from "@/components/RaceRulesRegulationComponent";
import { FaqComponent } from "@/components/FaqComponent";

const Event = () => {
    return (
        <>
            <CategoryInfo />
            <CampaignCharity />
            <RaceRulesRegulationComponent />
            <FaqComponent />
        </>
    );
}

export default Event;
