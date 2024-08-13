"use server";

import prisma from "@/lib/db";

export async function createTodo(formData: FormData) {
    await prisma.todo.create({ data: { todo: formData.get("todo") as string } })
}