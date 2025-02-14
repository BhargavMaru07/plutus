import { prisma } from "./prisma";


interface StrategyData {
  duration: number;
  maxProfit: number;
  maxLoss: number;
  totalAmount: number;
  userId: string;
}

export const createStrategy = async (data: StrategyData) => {
  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: data.userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Create a new strategy 
    const strategy = await prisma.strategy.create({
      data: {
        duration: data.duration,
        maxProfit: data.maxProfit,
        maxLoss: data.maxLoss,
        totalAmount: data.totalAmount,
        userId: data.userId, // Link strategy to user
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
  duration?: number;
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
