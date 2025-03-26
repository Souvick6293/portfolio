import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useState } from "react";
import { getTimelineData } from "@/sanity/lib/queries";
import Image from "next/image";
import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  organization: string;
  description: string;
  startDate: string;
  endDate?: string;
  iconUrl?: string;
}

const Journey = () => {
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: TimelineItem[] = await getTimelineData();
      setTimeline(data);
    };

    fetchData();
  }, []);

  return (
    <motion.section
      id="journey"
      className="py-24 bg-[#1d283f]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold pb-5 text-center">My Journey</h2>

        <VerticalTimeline>
          {timeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ background: "#3b82f6", color: "#fff" }}
              contentArrowStyle={{ borderRight: "10px solid #3b82f6" }}
              date={`${item.startDate} - ${item.endDate || "Present"}`}
              iconStyle={{
                background: "yellow",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
              icon={
                <div className="relative">
                  {item.iconUrl && (
                    <>
                      <div className="pulse-animation"></div>
                      <Image
                        src={item.iconUrl}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="rounded-full relative z-10"
                      />
                    </>
                  )}
                </div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="vertical-timeline-element-title text-xl font-semibold">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-sm">
                  {item.organization}
                </h4>
                <p>{item.description}</p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Journey;
