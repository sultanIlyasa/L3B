"use client";
import React from "react";
import { CategoryInfo } from "@/components/CategoryInfo";
import { CampaignCharity } from "@/components/CampaignCharity";
import { RaceRulesRegulationComponent } from "@/components/RaceRulesRegulationComponent";
import { FaqComponent } from "@/components/FaqComponent";

const Event = () => {
  return (
    <div className="overflow-hidden">
      <section id="competition-info" className="pb-12">
        <CategoryInfo />
      </section>
      <section id="campaign-charity" className="pb-12 ">
        <CampaignCharity />
      </section>
      <section id="race-rules" className="pt-20">
        <RaceRulesRegulationComponent />
      </section>
      <section id="faq" className="py-24">
        <FaqComponent />
      </section>
    </div>
  );
};

export default Event;
