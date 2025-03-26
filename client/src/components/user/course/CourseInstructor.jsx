import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

// // Map JSON icons to React icons
const socialIcons = {
    FaLinkedin: FaLinkedin,
    FaTwitterSquare: FaTwitterSquare,
    FaGithubSquare: FaGithubSquare,
};

export const CourseInstructor = ({ instructor }) => {
    if (!instructor) return null;

    return (
        <Card className="bg-card p-6  flex flex-col items-center text-center space-y-4 rounded-lg shadow-lg border border-border transition-colors">
            <h1 className="font-bold mb-6">Know your mentor</h1>

            {/* Instructor Avatar */}
            <Avatar className="h-20 w-20 border border-border shadow-md">
                <AvatarImage src={instructor?.image} alt={instructor?.name} />
                <AvatarFallback className="bg-muted text-xl font-semibold">{instructor?.name?.charAt(0)}</AvatarFallback>
            </Avatar>

            {/* Instructor Details */}
            <CardContent className="flex flex-col items-center space-y-8">
                <h2 className="text-xl font-bold text-foreground">{instructor?.name}</h2>
                <p className="text-sm text-muted-foreground">{instructor?.bio}</p>

                {/* Expertise Badges */}
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {instructor?.expertise?.map((skill, index) => (
                        <Badge key={index} className="bg-accent text-accent-foreground px-2 py-1 text-xs">
                            {skill}
                        </Badge>
                    ))}
                </div>

                {/* Experience & Social Links */}
                <p className="text-sm text-muted-foreground mt-2">
                    Experience: <span className="font-medium text-foreground">{instructor?.experience} years</span>
                </p>

                {instructor?.socials && (
                    <div className="flex gap-4 mt-3">
                        {instructor?.socials?.map(({ name, url, icon: Icon }, index) => { 
                            const IconComponent = socialIcons[Icon] //converting string to component
                            return (
                                <a
                                    key={index}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline flex items-center gap-1 text-sm"
                                >
                                    <IconComponent className="w-4 h-4" />
                                    {/* <Icon className="w-4 h-4" /> */}
                                    {name}
                                </a>
                            );
                        })}
                    </div>
                )}
                {/* <FaLinkedin />
                <FaGithubSquare />
                <FaTwitterSquare /> */}
            </CardContent>
        </Card>
    );
};
