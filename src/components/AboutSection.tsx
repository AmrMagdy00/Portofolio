import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { FileText, Briefcase, GraduationCap, Download } from "lucide-react";
import LazyImage from "./LazyImage";
import { Links } from "@/data/links";

const AboutSection = () => {
  const resumeUrl = Links.resume;
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handledownload = () => {
    toast({
      title: "Downloading Resume",
      description: "Your download will start shortly.",
    });
  };

  return (
    <section id="about" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Bio
              </h3>
              <p className="text-muted-foreground">
                Full Stack Developer with a strong base in C++, C#, and core CS
                fundamentals (Data Structures, Algorithms, OOP, SOLID, OS,
                Networking, Database, Design Patterns). then mastered the MERN
                Stack through ITI projects. Passionate about working mainly as a
                Back-End Developer using Node.js (Express/Nest), and also open
                to Full Stack roles with React.js/Next.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />{" "}
                      Education
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium">
                        Information Technology Institute (ITI)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        MERN Stack Development
                      </p>
                      <p className="text-sm text-muted-foreground">2025</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" /> Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">
                          Intern – Back-End Developer
                        </p>
                        <p className="text-sm text-muted-foreground">
                          EFG Holding
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Nov 2024 — Feb 2025
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          Trainee – Full-Stack (MERN)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Information Technology Institute (ITI)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Mar 2025 — Aug 2025
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          Freelance Full-Stack Developer
                        </p>
                        <p className="text-sm text-muted-foreground">
                          freelancer
                        </p>
                        <p className="text-sm text-muted-foreground">
                          May 2025 — Present
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Column */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="w-60 h-60 border-4 border-primary/20">
                <AvatarImage
                  src="/imgs/me.jpg"
                  alt="Amr Magdy"
                  loading="lazy"
                />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold">Amr Magdy</h3>
              <p className="text-muted-foreground">
                Full Stack Developer (MERN)
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <Badge variant="outline" className="bg-primary/10">
                Java Script
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Type Script
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Node.js
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                React.js
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Next.js
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Express.js
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Nest.js
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                SQL
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Mongo DB
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="gap-2" asChild onClick={handledownload}>
                <a href={resumeUrl} download="Amr_Magdy_CV.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
