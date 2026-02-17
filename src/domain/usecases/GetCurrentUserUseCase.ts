import { Async } from "domain/entities/Async";
import { User } from "domain/entities/User";
import { UserRepository } from "domain/repositories/UserRepository";

import { Logger } from "../logger/Logger";

export class GetCurrentUserUseCase {
    constructor(private logger: Logger, private userRepository: UserRepository) {}

    async execute(): Async<User> {
        this.logger.debug("Fetching user information...");
        const currentUser = await this.userRepository.getCurrent();
        this.logger.info(`Current User: id=${currentUser.id}, name=${currentUser.name}`);
        return currentUser;
    }
}
