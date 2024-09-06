"use client";
import React from "react";
import { CategoryInfo } from "@/components/CategoryInfo";
import { CampaignCharity } from "@/components/CampaignCharity";
import { RaceRulesRegulationComponent } from "@/components/RaceRulesRegulationComponent";
import { FaqComponent } from "@/components/FaqComponent";

const Event = () => {
  return (
    <div className="container mx-auto px-4">
      <section id="competition-info" className="py-12">
        <CategoryInfo />
      </section>
      <section id="campaign-charity" className="py-12">
        <CampaignCharity />
      </section>
      <section id="race-rules" className="py-12">
        <RaceRulesRegulationComponent />
      </section>
      <section id="faq" className="py-12">
        <FaqComponent />
      </section>
    </div>
  );
};

export default Event;
