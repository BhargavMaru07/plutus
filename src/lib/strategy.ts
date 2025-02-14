import { prisma } from "./prisma";

interface StrategyData {
  duration: string;
  maxProfit: number;
  maxLoss: number;
  totalAmount: number;
  userId: string;
}



interface StrategyData {
  duration: string;
  maxProfit: number;
  maxLoss: number;
  totalAmount: number;
  userId: string;
}

export const createStrategy = async (data: StrategyData) => {
  try {
    console.log("Received data:", data);

    // Ensure all fields are present before inserting
    if (!data.userId || !data.duration || data.maxProfit == null || data.maxLoss == null || data.totalAmount == null) {
      throw new Error("Invalid strategy data provided");
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: data.userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    console.log("Creating strategy with:", data);

    const strategy = await prisma.strategy.create({
      data: {
        duration: data.duration,
        maxProfit: data.maxProfit,
        maxLoss: data.maxLoss,
        totalAmount: data.totalAmount,
        userId: user.id, // Make sure it matches the database schema
      },
    });

    return strategy;
  } catch (error) {
    console.error("Error creating strategy:", error);
    throw error;
  }
};

interface UpdateStrategyData {
  id: string;
  duration?: string;
  maxProfit?: number;
  maxLoss?: number;
  totalAmount?: number;
}

export const updateStrategy = async (data: UpdateStrategyData) => {
  try {
    const strategy = await prisma.strategy.update({
      where: { id: data.id },
      data: {
        duration: data.duration,
        maxProfit: data.maxProfit,
        maxLoss: data.maxLoss,
        totalAmount: data.totalAmount,
      },
    });

    return strategy;
  } catch (error) {
    console.error("Error updating strategy:", error);
    throw new Error("Failed to update strategy");
  }
};

export const deleteStrategy = async (id: string) => {
  try {
    await prisma.strategy.delete({
      where: { id },
    });

    return { message: "Strategy deleted successfully" };
  } catch (error) {
    console.error("Error deleting strategy:", error);
    throw new Error("Failed to delete strategy");
  }
};

