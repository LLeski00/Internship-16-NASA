type ApodResponse = {
    resource: { [key: string]: string };
    concept_tags: boolean;
    title: string;
    date: string;
    url: string;
    hdurl?: string;
    media_type: "image" | "video";
    explanation: string;
    concepts?: string[];
    thumbnail_url?: string;
    copyright: string;
    service_version: string;
};

export { ApodResponse };
