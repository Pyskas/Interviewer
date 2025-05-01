import { useRouter } from "next/navigation";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";

const useMeetingActions = () => {
    const router = useRouter();
    const client = useStreamVideoClient();

    const createInstantMeeting = async () => {
        if (!client) return;

        try {
            const id = crypto.randomUUID();
            const call = client.call("default", id);

            await call.getOrCreate({
                data: {
                    starts_at: new Date().toISOString(),
                    custom: {
                        description: "Instant Meeting",
                    },
                },
            });

            router.push(`/meeting/${call.id}`);
            toast.success("Собеседование создано");
        } catch (error) {
            console.error(error);
            toast.error("Ошибка в создании собеседования");
        }
    };

    const joinMeeting = (callId: string) => {
        if (!client) return toast.error("Ошибка подключения к интервью.Пожалуйста попробуйте снова.");
        router.push(`/meeting/${callId}`);
    };

    return { createInstantMeeting, joinMeeting };
};

export default useMeetingActions;