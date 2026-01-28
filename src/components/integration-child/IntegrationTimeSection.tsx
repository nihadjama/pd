import SectionContainer from '@/common/SectionContainer';
import React from 'react'
import { Check } from 'lucide-react';
import Button from '@/common/Button';
import { H2 } from '@/common/headings';
import IntegrationAnimation from './IntegrationAnimation';
import IntegrationTimeSVG from './IntegrationTimeSVG';

interface IntegrationTimeSectionProps {

    stat: {
        value: string;
        label: string;
        description: string;
    };
    primaryCta: {
        text: string;
        href: string;
    };
}


export default function IntegrationTimeSection({ stat, primaryCta }: IntegrationTimeSectionProps) {
    return (
        <SectionContainer className="flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 border-y py-8 md:py-10 lg:py-12">


            <div className="flex flex-col items-start w-full md:w-1/2 gap-4 px-4 md:px-0">
                {/* <span className="font-sans font-medium text-5xl leading-[48px] text-primary">{stat.value}</span> */}
                <div className="flex items-center gap-1.5 font-sans font-medium text-xs bg-primary/20 text-primary border border-primary pl-2 pr-2.5 py-1.5 rounded-full">

                    <Check className="w-4 h-4" /> <span>No Setup Fee</span>
                </div>
                <H2><span className="text-primary">{stat.value}</span> {stat.label}</H2>
                <p className="font-sans font-normal text-base leading-6 text-muted">
                    {stat.description}
                </p>

                <div className="flex">


                    <Button href={primaryCta.href} variant="primary" className="flex items-center justify-center w-full sm:w-auto">
                        {primaryCta.text}
                    </Button>
                </div>
            </div>

            <div className="md:w-1/2 w-full items-center justify-center">
                <IntegrationTimeSVG></IntegrationTimeSVG>
            </div>

        </SectionContainer>
    )
}
