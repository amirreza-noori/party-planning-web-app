import { Survey } from "@/types";

export const surveyEInvite: Survey = {
  question: "want.e.invite",
  answers: [
    {
      title: "yes",
      tasks: [
        {
          title: "create.e.invite",
          description: "create.e.invite.description",
        },
      ],
    },
    {
      title: "no",
      tasks: [
        {
          title: "invite.guest",
          description: "invite.guest.description",
        },
      ],
    },
  ],
};
