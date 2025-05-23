"use client";

import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { Loader2Icon } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";

export default function Home() {
  const router = useRouter();
  const { isInterviewer, isCandidate, isLoading }=useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();


  const handleQuickAction = (id: string) => {
    switch (id) {
      case "new-call":
        setModalType("start");
        setShowModal(true);
        break;
      case "join-interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${id}`);
    }
  };

  if(isLoading) return <LoaderUI />;

  return (
     <div className="container max-w-7xl mx-auto p-6">
    {/* Вступительная секция */}
    <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
        Добро пожаловать!
      </h1>
      <p className="text-muted-foreground mt-2">
        {isInterviewer
          ? "Эффективно проводите собеседования и проверяйте кандидатов"
          : "Получите доступ к вашим предстоящим интервью"}
      </p>
    </div>

    {isInterviewer ? (
      <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {QUICK_ACTIONS.map((action) => (
            <ActionCard 
            key={action.id}
            action={action}
            onClick={() => handleQuickAction(action.id)} 
          />
          ))}
      </div>

      <MeetingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalType === "join" ? "Присоединиться к интервью" : "Начать интервью"}
        isJoinMeeting={modalType ==="join"}
      />
      </>
    ) : (
      <>
        <div>
        <h1 className="text-3xl font-bold">Ваши интервью</h1>
        <p className="text-muted-foreground mt-1">Смотрите и подключайтесь к вашим запланированным интервью</p>
        </div>

        <div className="mt-8">
          {interviews === undefined ? (
              <div className="flex justify-center py-12">
              <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : interviews.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {interviews.map((interview) => (
                  <MeetingCard key={interview._id} interview={interview} />
                ))}
              </div>
          ) : (
              <div className="text-center py-12 text-muted-foreground">
                У вас нету запланированных интервью на данный момент
              </div>
          )}
        </div>
      </>
    )}
  </div>
  );
}
